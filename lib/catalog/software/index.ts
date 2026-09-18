import type { Project } from '../types';

import uswds from './uswds';
import loginGov from './login-gov';
import cloudGov from './cloud-gov';
import codeGov from './code-gov';
import oscal from './oscal';
import openmdao from './openmdao';
import energyplus from './energyplus';
import vetsApi from './vets-api';
import codeMil from './code-mil';
import caDesignSystem from './ca-design-system';
import mayflower from './mayflower';
import govukDesignSystem from './govuk-design-system';
import govukNotify from './govuk-notify';
import xRoad from './x-road';
import formsg from './formsg';
import openfisca from './openfisca';
import decidim from './decidim';
import gcNotify from './gc-notify';
import brlCad from './brl-cad';
import ghidra from './ghidra';
import atakCiv from './atak-civ';
import hirs from './hirs';
import paccor from './paccor';
import hootenanny from './hootenanny';
import mage from './mage';
import sarpy from './sarpy';
import ngaGeopackage from './nga-geopackage';
import apacheAccumulo from './apache-accumulo';
import apacheNifi from './apache-nifi';
import grassGis from './grass-gis';
import paraview from './paraview';
import selinux from './selinux';

export const projects: Project[] = [
  uswds,
  loginGov,
  cloudGov,
  codeGov,
  oscal,
  openmdao,
  energyplus,
  vetsApi,
  codeMil,
  caDesignSystem,
  mayflower,
  govukDesignSystem,
  govukNotify,
  xRoad,
  formsg,
  openfisca,
  decidim,
  gcNotify,
  brlCad,
  ghidra,
  atakCiv,
  hirs,
  paccor,
  hootenanny,
  mage,
  sarpy,
  ngaGeopackage,
  apacheAccumulo,
  apacheNifi,
  grassGis,
  paraview,
  selinux,
];
