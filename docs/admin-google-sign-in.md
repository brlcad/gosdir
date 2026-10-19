# Google sign-in for the private admin portal

The portal uses Google Identity Services with a JavaScript callback and
server-side ID-token verification through Google's official Node library. It
needs a **web OAuth client ID**, not a client secret. It requests basic identity
only; it does not request access to Gmail, Drive, or Calendar. Apache continues
to host the site and proxy the private administrative service.

## Create the Google OAuth client

Sign in to [Google Auth Platform](https://console.cloud.google.com/auth/overview)
with the Google account that will own the client. Create a project named
**GOSDIR** or select an existing project you control. If the Console shows
**Get started**, complete that screen first.

1. Under **Branding**, use **GOSDIR Admin** for the application name and your
   Google account for the support and developer-contact email addresses. You
   can leave the logo unset. If requested, use these values:

   | Field                | Value                              |
   | -------------------- | ---------------------------------- |
   | Application homepage | `https://gosdir.com/`              |
   | Authorized domain    | `gosdir.com`                       |
   | Privacy policy       | `https://gosdir.com/admin/privacy` |

2. Under **Audience**, select **External** for a personal Gmail account. Keep
   the publishing status **Testing** and add your account as a test user.
   GOSDIR enforces its own account restriction on the server; the Console's
   test-user list is not the portal's access control. Google exempts basic
   Sign in with Google from the usual seven-day testing authorization expiry.
   [Google audience documentation](https://support.google.com/cloud/answer/15549945).
3. Under **Data Access**, use only `openid`, `email`, and `profile` (the Console
   may show the email/profile scopes as `userinfo.email` and
   `userinfo.profile`).
4. Under **Clients**, choose **Create client**, then **Web application**. Name
   it **GOSDIR Admin Web**.
5. Add exactly `https://gosdir.com` under **Authorized JavaScript origins**.
   Do not add `/admin/` or another path. Leave **Authorized redirect URIs**
   empty: this implementation receives the credential in a JavaScript callback.
6. Create the client and copy its **Client ID**, which ends in
   `.apps.googleusercontent.com`. The portal does not use the client secret.

These settings follow Google's
[Identity Services setup guide](https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid).

## Finish enrollment

The server operator first prepares one authorized account:

```sh
npm run admin:google -- --email=you@gmail.com
npm run admin:stop
npm run admin:start
```

The preparation command creates private `.admin-state/google.json` configuration
and prints an enrollment URL containing a one-time secret in its fragment. It
disables the portal's password endpoints when the service restarts, including
while the OAuth client is still pending. Existing password credentials do not
provide a fallback. Open the private link, follow its built-in Google Console
instructions, paste the client ID, and choose **Save client ID**. Then use the
Google sign-in button with the authorized account.

Alternatively, supply the public client ID while preparing the account:

```sh
npm run admin:google -- --email=you@gmail.com --client-id=123456789-example.apps.googleusercontent.com
```

Both the private enrollment secret and a verified Google login for the allowed
email are required for initial enrollment. Successful enrollment stores Google's
permanent account ID (`sub`) and consumes the secret. Later logins must match
that same account ID and the configured verified email. An identical email
claim on a different Google account is rejected. This follows
[Google's ID-token verification guidance](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token).

The portal removes the enrollment fragment from the address bar immediately.
The client ID can be corrected using the enrollment link until the account has
been bound. Once enrollment succeeds, client configuration is locked through
the web interface. Use `/admin/` for subsequent sign-ins.

## Session protection and recovery

The server validates Google's signature, issuer, audience, expiration, verified
email and account ID. Each sign-in also requires a short-lived nonce bound to an
HttpOnly browser cookie. A challenge can be used once. Admin sessions retain
their Origin and CSRF protections, secure cookies, eight-hour expiry, and
invalidation on service restart. Google identity tokens are not saved in the
private configuration, job history, or application logs.

Keep `.admin-state/` in private backups, especially its enrolled Google account
configuration. It is ignored by Git and denied direct access by Apache. The
Google Identity Services script is loaded only on the configured login screen;
the public directory remains independent of Google sign-in.

To explicitly re-enroll a different account or recover from a bad account
binding, stop the service, move `.admin-state/google.json` to a private backup,
rerun `admin:google` with the intended email and optional existing client ID,
then restart and use the newly generated enrollment URL. The command refuses
to overwrite an already enrolled account. Re-enrollment invalidates the prior
setup link and existing portal sessions; job history and moderation data remain.

Local verification covers signed-token rejection and acceptance using a test RSA
key through the official Google library, plus HTTP configuration and challenge
guards. A live Google login must be checked after the actual OAuth client is
created with the authorized origin.
