# Coordinator QA: Field Campaign Explorer (FCX)

Decision: admit one FCX product, represented by the UI repository. Do not split its UI and backend into separate catalog records. The individual UI review is recorded in `nasa-luna-005-06.jsonl`; the paired core review is in the same batch.

- Government provenance and product identity: NASA's [GHRC tools page](https://www.earthdata.nasa.gov/centers/ghrc-daac/data-access-tools) names FCX as an open-source cloud-based visualization tool. NASA GHRC's 2022 [User Working Group announcement](https://ghrc.nsstc.nasa.gov/home/sites/default/files/16_GHRC_UWG_preparing_for_the_future_v2.pdf) links the UI and core repositories as one product family.
- Public source and license scope: the user-facing [UI repository](https://github.com/nasa/GHRC-FieldCampaign-eXplorer-UI) provides React source and local/deployment instructions. Its [Apache-2.0 grant](https://github.com/nasa/GHRC-FieldCampaign-eXplorer-UI/blob/main/LICENSE) first appears with source in [commit 10db3d7](https://github.com/nasa/GHRC-FieldCampaign-eXplorer-UI/commit/10db3d7dc9189caa70160c7659c14ab955ec0a71) on 2022-02-17. The paired [core/backend repository](https://github.com/nasa/GHRC-FieldCampaign-eXplorer-core) has its own Apache-2.0 grant. Dataset, AWS/cloud, and third-party rights remain separate.
- Year: 2022 is the first checked public, grant-bearing source snapshot for the FCX application family.
- Notability and status: the exact [live NASA FCX service](https://ghrc.earthdata.nasa.gov/fcx/index.html) remains linked from the UI README and is listed on NASA's current GHRC tools page. Repositories are quiet since 2022, so status is Maintained based on current product-specific service/listing, not Active repository development.

The FCX product is one interactive service consisting of a user-facing UI and a paired backend. The backend row is not a separate catalog product; FCX does not include the field-campaign datasets or AWS services.
