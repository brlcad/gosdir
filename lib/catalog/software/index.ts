import type { Project } from '../types';

import uswds from './uswds';
import loginGov from './login-gov';
import cloudGov from './cloud-gov';
import codeGov from './code-gov';
import oscal from './oscal';
import openmdao from './openmdao';
import energyplus from './energyplus';
import helix from './helix';
import accert from './accert';
import wecGrid from './wec-grid';
import wmpyPower from './wmpy-power';
import vetsApi from './vets-api';
import codeMil from './code-mil';
import caDesignSystem from './ca-design-system';
import mayflower from './mayflower';
import govukDesignSystem from './govuk-design-system';
import govukNotify from './govuk-notify';
import xRoad from './x-road';
import formsg from './formsg';
import openfisca from './openfisca';
import chatmd from './chatmd';
import ganttProject from './ganttproject';
import cloudCompare from './cloudcompare';
import webmappVenezia from './webmapp-venezia';
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
import openMct from './open-mct';
import fPrime from './f-prime';
import moose from './moose';
import openvsp from './openvsp';
import cfs from './cfs';
import fireDynamicsSimulator from './fire-dynamics-simulator';
import epaSwmm from './epa-swmm';
import cmaq from './cmaq';
import modflow6 from './modflow-6';
import federalAuditClearinghouse from './federal-audit-clearinghouse';
import federalWebsiteIndex from './federal-website-index';
import koha from './koha';
import localgovDrupal from './localgov-drupal';
import openGovernmentCommunityBuilder from './open-government-community-builder';
import postgresql from './postgresql';
import goGovSg from './go-gov-sg';
import mockpass from './mockpass';
import webExperienceToolkit from './web-experience-toolkit';
import assemblyline from './assemblyline';
import taipeiCityDashboard from './taipei-city-dashboard';
import leos from './leos';
import digitalSignatureService from './digital-signature-service';
import govukPrototypeKit from './govuk-prototype-kit';
import kadasAlbireo from './kadas-albireo';
import laSuiteDocs from './la-suite-docs';
import clienteAfirma from './cliente-afirma';
import cyberchef from './cyberchef';
import onyxia from './onyxia';
import nlWallet from './nl-wallet';
import qualityTime from './quality-time';
import cset from './cset';
import scubaGear from './scubagear';
import openLegislation from './openlegislation';
import stateCu from './statecu';
import stateDmi from './statedmi';
import stateMod from './statemod';
import tsTool from './tstool';
import ctxHazardApi from './ctx-hazard-api';
import digitalAnalyticsProgram from './digital-analytics-program';
import reactDsfr from './react-dsfr';
import i14y from './i14y';
import vitam from './vitam';
import dashlord from './dashlord';
import swiyuIssuer from './swiyu-issuer';
import accessibleAutocomplete from './accessible-autocomplete';
import demarchesSimplifiees from './demarches-simplifiees';
import registerTraineeTeachers from './register-trainee-teachers';
import sitesConformes from './sites-conformes';
import onsDesignSystem from './ons-design-system';
import checkV from './checkv';
import hardwareControl from './hardware-control';
import swissFederalMapViewer from './swiss-federal-map-viewer';
import swissGeodataStacApi from './swiss-geodata-stac-api';
import agridata from './agridata';
import fire from './fire';
import gftl from './gftl';
import scales from './scales';
import upcxx from './upcxx';
import shine from './shine';
import warp from './warp';
import oerebViewer from './oereb-viewer';
import javaPathfinder from './java-pathfinder';
import hgdl from './hgdl';
import swissOssCatalog from './swiss-oss-catalog';
import kannIchBohren from './kann-ich-bohren';
import kssolv from './kssolv';
import oco2Retrieval from './oco2-retrieval';
import trustbrokerSwiss from './trustbroker-swiss';
import swissgeolAssets from './swissgeol-assets';
import klartextzh from './klartextzh';
import amsterdamDesignSystem from './amsterdam-design-system';
import dutchApiRegister from './dutch-api-register-api';
import dutchOssRegister from './dutch-oss-register-api';
import abacus from './abacus-kiesraad';
import autoct from './autoct';
import invulhulpen from './invulhulpen';
import logboekDataverwerkingenJvm from './logboek-dataverwerkingen-jvm';
import gpcam from './gpcam';
import fvgp from './fvgp';
import abrGeocoder from './abr-geocoder';
import dadsDesignTokens from './dads-design-tokens';
import pflotran from './pflotran';
import signalen from './signalen';
import jpNameMatchingModel from './jp-name-matching-model';
import harunobu from './harunobu';
import donChecker from './don-checker';
import mojxml2geojson from './mojxml2geojson';
import oasGenerator from './oas-generator';
import repoDocsGenerator from './repo-docs-generator';
import imgAnnotationPipeline from './img-annotation-pipeline';
import djangoMagicauth from './django-magicauth';
import recoco from './recommandations-collaboratives';
import catala from './catala';
import esupPod from './esup-pod';
import genesearch from './jgi-genesearch';
import synbioqcPbj from './synbioqc-pbj';
import mbinDocker from './mbin-docker';
import checkfirst from './checkfirst';
import postmanSg from './postman-sg';
import publicodes from './publicodes';
import archifiltreDocs from './archifiltre-docs';
import shinygouv from './shinygouv';
import genespace from './genespace';
import bigslice from './bigslice';
import spacerextractor from './spacerextractor';
import gepnet from './gepnet';
import inraeDevCas from './inrae-dev-cas';
import inraeIndicators from './inrae-indicators';
import inraeSava from './inrae-sava';
import rdvServicePublic from './rdv-service-public';
import oprPaas from './opr-paas';
import omgevingsbeleidFrontend from './omgevingsbeleid-frontend';
import decoupageAdministratif from './decoupage-administratif';
import dfirOrc from './dfir-orc';
import acousticImpulseCounter from './acoustic-impulse-counter';
import powersheds from './powersheds';
import grnaSeqret from './grna-seqret';
import hpFlexMpc from './hp-flex-mpc';
import alaskaLandbirdTrends from './alaska-landbird-trends';
import laSuiteDrive from './la-suite-drive';
import codesPostaux from './codes-postaux';
import mesAdresses from './mes-adresses';
import genomeface from './genomeface';
import brantAgeRatioModel from './brant-age-ratio-model';
import climextremes from './climextremes';
import walrusHauloutCartography from './walrus-haulout-cartography';
import eelgrassBiomassModel from './eelgrass-biomass-model';
import geochemicalDatabaseTools from './geochemical-database-tools';
import pygarden from './pygarden';
import asyncvol from './asyncvol';
import etabli from './etabli';
import cdata from './cdata';
import comparia from './comparia';
import nppsdViz from './nppsd-viz';
import borealBirdDensity from './boreal-bird-density';
import schemaDataGouv from './schema-data-gouv';
import esupSgc from './esup-sgc';
import esupSignature from './esup-signature';
import opengatellm from './opengatellm';
import qfasar from './qfasar';
import seaOtterSurveyViz from './sea-otter-survey-viz';
import origenLibraryManager from './origen-library-manager';
import slice from './slice';
import drtsans from './drtsans';
import sentinelImageryDownloader from './sentinel-imagery-downloader';
import trackSegmentation from './track-segmentation';
import pointCountPhenologySimulation from './point-count-phenology-simulation';
import eelgrassPowerAnalysis from './eelgrass-power-analysis';
import spaceTimePointProcessModels from './space-time-point-process-models';
import thinnedPointProcessModels from './thinned-point-process-models';
import geotrekAdmin from './geotrek-admin';
import xan from './xan';
import sdgital2030Output from './sdgital2030-output';
import whitehallPublisher from './whitehall-publisher';
import gmicCore from './gmic-core';
import govScotPublishing from './gov-scot-publishing';
import publiccodeEditor from './publiccode-editor';
import publiccodeValidatorApi from './publiccode-validator-api';
import developersItaliaApi from './developers-italia-api';
import publiccodeCrawler from './publiccode-crawler';
import publiccodeParserGo from './publiccode-parser-go';
import pat from './pat';
import rndtMetadataCatalogue from './rndt-metadata-catalogue';
import rndtGeodcatApApi from './rndt-geodcat-ap-api';
import rndtGeoviewer from './rndt-geoviewer';
import rndtMetadataConverter from './rndt-metadata-converter';
import altinnStudio from './altinn-studio';
import accessMonitor from './accessmonitor';
import accessMonitorExtension from './accessmonitor-extension';
import govukPay from './govuk-pay';
import digirhythm from './digirhythm';
import ateApi from './ate-api';
import ateFrontend from './ate-frontend';
import fiveGNRad from './5gnrad';
import triact from './triact';
import updateYourCapitalSchemes from './update-your-capital-schemes';
import munichAtaf from './munich-ataf';
import munichZms from './munich-zms';
import teaPlatform from './tea-platform';
import jeapArchrepo from './jeap-archrepo';
import jeapAudit from './jeap-audit';
import jeapBusinessProcessTest from './jeap-business-process-test';
import autoemulate from './autoemulate';
import clevercsv from './clevercsv';
import cyclessDatasetCode from './cycless-dataset-code';
import oawTracker from './oaw-tracker';
import deepsensor from './deepsensor';
import graphAttentionReplanner from './graph-attention-replanner';
import fridge from './fridge';
import aalmV3 from './aalm-v3';
import airSensorDataUnifier from './air-sensor-data-unifier';
import airSensorNetworkAnalysisTool from './air-sensor-network-analysis-tool';
import swissgeolBoreholes from './swissgeol-boreholes';
import swissgeolOcr from './swissgeol-ocr';
import swissgeolViewer from './swissgeol-viewer';
import aquametBio from './aquamet-bio';
import aquametNwca from './aquamet-nwca';
import sarVesselDetectionFpga from './sar-vessel-detection-fpga';
import scivision from './scivision';
import teaTechniques from './tea-techniques';
import swiyuDidResolver from './swiyu-did-resolver';
import swiyuDidToolbox from './swiyu-did-toolbox';
import swiyuSandboxWallet from './swiyu-sandbox-wallet';
import swiyuVerifier from './swiyu-verifier';
import visualize from './visualize';
import loomSwissArmedForces from './loom-swiss-armed-forces';
import attila2 from './attila2';
import avert from './avert';
import bis from './bis';
import syntheticPopulationCatalyst from './synthetic-population-catalyst';
import jeapCli from './jeap-cli';
import jeapCrypto from './jeap-crypto';
import jeapDbSchemaPublisher from './jeap-db-schema-publisher';
import jeapDeploymentlogService from './jeap-deploymentlog-service';
import jeapErrorHandling from './jeap-error-handling';
import ePetitions from './e-petitions';
import bmds from './bmds';
import gdsApiAdapters from './gds-api-adapters';
import gdsSso from './gds-sso';
import epaEiaPowerSectorCrosswalk from './epa-eia-power-sector-crosswalk';
import campdFacilityMap from './campd-facility-map';
import govspeak from './govspeak';
import govspeakPreview from './govspeak-preview';
import govukChat from './govuk-chat';
import hmrcManualsApi from './hmrc-manuals-api';
import manualsPublisher from './manuals-publisher';
import linkCheckerApi from './link-checker-api';
import govukNotifyDotnetClient from './govuk-notify-dotnet-client';
import govukNotifyJavaClient from './govuk-notify-java-client';
import govukNotifyNodeClient from './govuk-notify-node-client';
import govukNotifyPhpClient from './govuk-notify-php-client';
import cgem from './cgem';
import chlorineBreakpointCurveSimulator from './chlorine-breakpoint-curve-simulator';
import govukDocker from './govuk-docker';
import plausi from './plausi';
import govukMirror from './govuk-mirror';
import govukKnowledgeGraph from './govuk-knowledge-graph';
import oblique from './oblique';
import swissFederalDesignSystem from './swiss-federal-design-system';
import chvote from './chvote-offline-administration-v1';
import govukPublisher from './govuk-publisher';
import publishingApi from './publishing-api';
import rackLogstasher from './rack-logstasher';
import railsTranslationManager from './rails-translation-manager';
import govukRelease from './govuk-release';
import govukRouter from './govuk-router';
import rubocopGovuk from './rubocop-govuk';
import govukSearchAdmin from './govuk-search-admin';
import govukSearchApi from './govuk-search-api';
import govukNotifyPythonClient from './govuk-notify-python-client';
import govukNotifyRubyClient from './govuk-notify-ruby-client';
import optic14n from './optic14n';
import pasteHtmlToGovspeak from './paste-html-to-govspeak';
import placesManager from './places-manager';
import plek from './plek';
import publicAssetChecker from './public-asset-checker';
import audiominer from './audiominer';
import opendesk from './opendesk';
import masterportal from './masterportal';
import vecto from './vecto';
import autoNse from './auto-nse';
import autoRefl from './auto-refl';
import bpcMonitor from './bpc-monitor';
import savetree from './savetree';
import set from './skyglow-estimation-toolbox';
import vocal from './vocal-calipso';
import onearth from './onearth';
import worldview from './worldview';
import flightview from './flightview';
import accessMonitorRuleSets from './accessmonitor-rulesets';
import autenticacaoGov from './autenticacao-gov';
import ntrtsim from './ntrtsim';
import abaverify from './abaverify';
import apodApi from './apod-api';
import aprilNav from './aprilnav';
import bingo from './bingo';
import atomArchives from './atom-archives';
import ccdd from './ccdd';
import cfe from './cfe';
import cfsCfdp from './cfs-cfdp';
import myMonitor from './my-monitor';
import ptAccessibilityObservatory from './pt-accessibility-observatory';
import cfl3d from './cfl3d';
import nasaChannelEmulator from './nasa-channel-emulator';
import cmrOpenSearch from './cmr-opensearch';
import atsMilanoPpc from './ats-milano-ppc';
import docSuitePa from './docsuite-pa';
import nasaCmr from './nasa-cmr';
import nasaDavetools from './nasa-davetools';
import nasaDelta from './nasa-delta';
import nasaCfsFileManager from './nasa-cfs-file-manager';
import nasaCfsLimitChecker from './nasa-cfs-limit-checker';
import nasaKodiak from './nasa-kodiak';
import nasaLager from './nasa-lager';
import nasaLegacyMarsGcm from './nasa-legacy-mars-gcm';
import nasaGuam from './nasa-guam';
import nasaCloudBrowse from './nasa-cloud-browse';
import nasaFcx from './nasa-fcx';
import nasaPylot from './nasa-pylot';
import nasaGiant from './nasa-giant';
import nasaGunns from './nasa-gunns';
import nasaKeplerRobovetter from './nasa-kepler-dr25-robovetter';
import nasaKeplerports from './nasa-keplerports';
import nasaKnife from './nasa-knife';
import nasaEarthdataSearch from './nasa-earthdata-search';
import nasaEarthdataVarinfo from './nasa-earthdata-varinfo';
import nasaEdscEchoforms from './nasa-edsc-echoforms';
import nasaEdscTimeline from './nasa-edsc-timeline';
import montesilvanoGovpayInteractionLayer from './it-montesilvano-govpay-interaction-layer';
import montesilvanoValoriVenali from './it-montesilvano-valori-venali';
import bariSgvp from './it-bari-sgvp';
import bariSit from './it-bari-sit';
import genovaEmergenzePcge from './it-genova-emergenze-pcge';
import genovaFascicoloDelCittadino from './it-genova-fascicolo-del-cittadino';
import genovaNova from './it-genova-nova';
import caMicroscope from './camicroscope';
import cboard from './cboard';
import ceph from './ceph';
import compDamDgd from './compdam-dgd';

import lanlSpade from './lanl-spade';
import lanlTardigradeExamples from './lanl-tardigrade-examples';
import lanlTurboTurtle from './lanl-turbo-turtle';
import lanlBling from './lanl-bling';
import lanlMathProgIncidence from './lanl-mathprogincidence';
import lanlMathOptAi from './lanl-mathoptai';
import lanlQuantumApplications from './lanl-quantum-applications';
import lanlEdgeBioinformatics from './lanl-edge-bioinformatics';
import lanlAllium from './lanl-allium';
import lanlAmpSuite from './lanl-ampsuite';
import lanlAnnoMateMicroSentryAi from './lanl-annomate-microsentryai';
import lanlArchitector from './lanl-architector';
import lanlArcs from './lanl-arcs';
import lanlAriadne from './lanl-ariadne';
import lanlAriannaPpl from './lanl-arianna-ppl';
import lanlArtemisAstro from './lanl-artemis-astro';
import lanlAtccFinder from './lanl-atccfinder';
import lanlAugselfies from './lanl-augselfies';
import lanlBindingPrediction from './lanl-binding-prediction';
import lanlBiorad from './lanl-biorad';
import lanlBngsim from './lanl-bngsim';
import lanlBohydra from './lanl-bohydra';
import lanlHippynn from './lanl-hippynn';
import lanlHsiNerfstudio from './lanl-hsi-nerfstudio';
import lanlIbexRibbonseparation from './lanl-ibex-ribbonseparation';
import lanlImpala from './lanl-impala';
import lanlInfera from './lanl-infera';
import lanlInverseCnf from './lanl-inverse-cnf';
import lanlJ3d from './lanl-j3d';
import lanlLostOcr from './lanl-lost-ocr';
import lanlLunus from './lanl-lunus';
import lanlLvportdriver from './lanl-lvportdriver';
import lanlMatar from './lanl-matar';
import lanlMetconsin from './lanl-metconsin';
import lanlMfLbm from './lanl-mf-lbm';
import lanlMilk from './lanl-milk';
import lanlMinervachem from './lanl-minervachem';
import lanlKessel from './lanl-kessel';
import lanlLafa from './lanl-lafa';
import lanlLambast from './lanl-lambast';
import lanlLatteTraveltime from './lanl-latte-traveltime';
import lanlLdrdVirusWork from './lanl-ldrd-virus-work';
import lanlLibquo from './lanl-libquo';
import lanlNomad from './lanl-nomad';
import lanlNubhlight from './lanl-nubhlight';
import lanlOpenfwi from './lanl-openfwi';
import lanlOwl from './lanl-owl';
import lanlPanhandle from './lanl-panhandle';
import lanlPas from './lanl-pas';
import lanlPfddV2 from './lanl-pfdd-v2';
import lanlPleiades from './lanl-pleiades';
import lanlOsmosis from './lanl-osmosis';
import lanlPybnf from './lanl-pybnf';
import lanlPycpApr from './lanl-pycp-apr';
import lanlPydnmfk from './lanl-pydnmfk';
import lanlPydntnk from './lanl-pydntnk';
import lanlPymplot from './lanl-pymplot';
import lanlPyptkinetics from './lanl-pyptkinetics';
import lanlPyseqm from './lanl-pyseqm';
import lanlPysimfrac from './lanl-pysimfrac';
import lanlQmdProgress from './lanl-qmd-progress';
import lanlQuantumVolumeInPractice from './lanl-quantum-volume-in-practice';
import lanlRgm from './lanl-rgm';
import lanlRingPullStrainAnalysis from './lanl-ring-pull-strain-analysis';
import lanlSedacs from './lanl-sedacs';
import lanlSeer from './lanl-seer';
import lanlSingularityEos from './lanl-singularity-eos';
import lanlSingularityOpac from './lanl-singularity-opac';
import lanlSources4d from './lanl-sources4d';
import lanlSparseBias from './lanl-sparse-bias';
import lanlSpikingBackprop from './lanl-spiking-backprop';
import lanlSplitml from './lanl-splitml';
import lanlSpus from './lanl-spus';
import lanlSsys from './lanl-ssys';
import lanlSupernu from './lanl-supernu';
import lanlTElf from './lanl-t-elf';
import lanlTdaAdversarialDetection from './lanl-tda-adversarial-detection';
import lanlThunderboltz from './lanl-thunderboltz';
import lanlTires from './lanl-tires';
import lanlTransformYourWorld from './lanl-transform-your-world';
import lanlTrees from './lanl-trees';
import lanlUrsa from './lanl-ursa';
import lanlVpicKokkos from './lanl-vpic-kokkos';
import lanlWaves from './lanl-waves';
import lanlYoke from './lanl-yoke';
import lanlZmodelKokkos from './lanl-zmodel-kokkos';
import lanlPselib from './lanl-pselib';
import lanlCov2GenomicgraphtheoryPca from './lanl-cov2-genomicgraphtheory-pca';
import lanlCovtransformer from './lanl-covtransformer';
import lanlBionetgen from './lanl-bionetgen';

import ornlMuMatScale from './ornl-mumatscale';
import ornlChathpc from './ornl-chathpc';
import ornlCurifactory from './ornl-curifactory';
import ornlCyberwheel from './ornl-cyberwheel';
import ornlDaspStacker from './ornl-dasp-stacker';
import ornlDdstore from './ornl-ddstore';
import ornlDedfoam from './ornl-dedfoam';
import ornlEquilipy from './ornl-equilipy';
import ornlGauntlet from './ornl-gauntlet';
import ornlHydragnn from './ornl-hydragnn';
import ornlHydragnnGfmFineTuning4Materials from './ornl-hydragnn-gfm-finetuning4materials';
import ornlIcat from './ornl-icat';
import ornlIpyoverlay from './ornl-ipyoverlay';
import ornlIris from './ornl-iris';
import ornlMatey from './ornl-matey';
import ornlMatris from './ornl-matris';
import ornlMatsimAgents from './ornl-matsim-agents';
import ornlMlmc from './ornl-mlmc';
import ornlNeurocorex from './ornl-neurocorex';
import ornlOpensampl from './ornl-opensampl';
import ornlOrmatex from './ornl-ormatex';
import ornlPdmatlab2d from './ornl-pdmatlab2d';
import ornlPdnetwork from './ornl-pdnetwork';
import ornlPetina from './ornl-petina';
import ornlPickerxl from './ornl-pickerxl';
import ornlPresto from './ornl-presto';
import ornlQuilt from './ornl-quilt';
import ornlReno from './ornl-reno';
import ornlSagesim from './ornl-sagesim';
import ornlAscends from './ornl-ascends';
import ornlNereids from './ornl-nereids';
import ornlNeunorm from './ornl-neunorm';
import ornlRustpix from './ornl-rustpix';
import ornlSlicer from './ornl-slicer';
import ornlStork from './ornl-stork';
import ornlSuperneuroabm from './ornl-superneuroabm';
import ornlSuperneuromat from './ornl-superneuromat';
import ornlThermo4pfm from './ornl-thermo4pfm';
import ornlToucan from './ornl-toucan';
import ornlTx2 from './ornl-tx2';
import ornlWaveDenoiser from './ornl-wave-denoiser';
import ornlWaveDp from './ornl-wave-dp';
import ornlAdios2 from './ornl-adios2';
import ornlBm3dornl from './ornl-bm3dornl';
import ornlBraggedgemodeling from './ornl-braggedgemodeling';
import ornlIbeatles from './ornl-ibeatles';
import ornlTdcsophiread from './ornl-tdcsophiread';
import ornlPicasso from './ornl-picasso';
import ornlRovidh from './ornl-rovidh';
import ornlRuscal from './ornl-ruscal';

import epaMarineEmissionsTools from './epa-marine-emissions-tools';
import epaMcsimmod from './epa-mcsimmod';
import epaMountainlakes from './epa-mountainlakes';
import epaWntr from './epa-wntr';
import epaUseeioWidgets from './epa-useeio-widgets';
import epaUseeior from './epa-useeior';
import epaVcpy from './epa-vcpy';
import epaWasteLogisticsTool from './epa-waste-logistics-tool';
import epaWasteStagingTool from './epa-waste-staging-tool';
import epaWatersGeoviewer from './epa-waters-geoviewer';
import epaWebcms from './epa-webcms';
import epaWmost from './epa-wmost';
import epaSpmodel from './epa-spmodel';
import epaSpsurvey from './epa-spsurvey';
import epaSsn2 from './epa-ssn2';
import epaStewi from './epa-stewi';
import epaStateior from './epa-stateior';
import epaStreamcattools from './epa-streamcattools';
import epaSupplyChainFactors from './epa-supply-chain-factors';
import epaTadashiny from './epa-tadashiny';
import epaTelss from './epa-telss';
import epaTheManifestGame from './epa-the-manifest-game';
import epaToxvaldbDcapPrep from './epa-toxvaldb-dcap-prep';
import epaTots from './epa-tots';
import epaTreecomparer from './epa-treecomparer';

import usNistPymdss from './us-nist-pymdss';
import usDoeParmoo from './us-doe-parmoo';
import usDoeParsl from './us-doe-parsl';
import usDoeSalsython from './us-doe-salsython';
import usDoeParflow from './us-doe-parflow';
import usDoeNuFastLbl from './us-doe-nufast-lbl';
import usDoePyLeem from './us-doe-pyleem';
import usDoeMofa from './us-doe-mofa';
import usDoeTlAsdi from './us-doe-tlasdi';
import usDoeYaksa from './us-doe-yaksa';
import usDoePnnlCimGraph from './us-doe-pnnl-cim-graph';
import usDoePnnlDbSchemaExportTool from './us-doe-pnnl-db-schema-export-tool';
import usDoePnnlDeconEngineV2 from './us-doe-pnnl-deconenginev2';
import usDoePnnlDeconTools from './us-doe-pnnl-decontools';
import usDoePnnlLiquid from './us-doe-pnnl-liquid';
import usDoePnnlMage from './us-doe-pnnl-mage';
import usDoePnnlMasic from './us-doe-pnnl-masic';
import usDoePnnlMolecularWeightCalculatorDll from './us-doe-pnnl-molecular-weight-calculator-dll';
import usDoePnnlMsFileInfoScanner from './us-doe-pnnl-ms-file-info-scanner';
import usDoePnnlMzidToTsvConverter from './us-doe-pnnl-mzid-to-tsv-converter';
import usDoePnnlOboDataConverter from './us-doe-pnnl-obo-data-converter';
import usDoePnnlPhrp from './us-doe-pnnl-phrp';
import usDoePnnlProteinCoverageSummarizer from './us-doe-pnnl-protein-coverage-summarizer';
import usDoePnnlProteinDigestionSimulator from './us-doe-pnnl-protein-digestion-simulator';
import usDoePnnlSmaqc from './us-doe-pnnl-smaqc';
import usDoePnnlUniprotDatFileParser from './us-doe-pnnl-uniprot-dat-file-parser';
import usDoePnnlBmdrc from './us-doe-pnnl-bmdrc';
import usDoePnnlCoderdata from './us-doe-pnnl-coderdata';
import usDoePnnlSnekmer from './us-doe-pnnl-snekmer';
import usDoePnnlSrpAnalytics from './us-doe-pnnl-srp-analytics';
import usDoePnnlIsomatchms from './us-doe-pnnl-isomatchms';
import usDoePnnlProteoMeter from './us-doe-pnnl-proteometer';
import usDoePnnlAptviz from './us-doe-pnnl-aptviz';
import usDoePnnlAtlas from './us-doe-pnnl-atlas';
import usDoePnnlBim2rdf from './us-doe-pnnl-bim2rdf';
import usDoePnnlBrainOhsu from './us-doe-pnnl-brain-ohsu';
import usDoePnnlBsplineMutualInformation from './us-doe-pnnl-bspline-mutual-information';
import usDoePnnlCactus from './us-doe-pnnl-cactus';
import usDoePnnlChemreasoner from './us-doe-pnnl-chemreasoner';
import usDoePnnlComet from './us-doe-pnnl-comet';
import usDoePnnlCopper from './us-doe-pnnl-copper';
import usDoePnnlDancepartner from './us-doe-pnnl-dancepartner';
import usDoePnnlDatalife from './us-doe-pnnl-datalife';
import usDoePnnlLipidimea from './us-doe-pnnl-lipidimea';
import usDoePnnlLipidoz from './us-doe-pnnl-lipidoz';
import usDoePnnlMetabolomicsEnsembleScore from './us-doe-pnnl-metabolomics-ensemble-score';
import usDoePnnlMzapy from './us-doe-pnnl-mzapy';
import usDoePnnlQcgnoms from './us-doe-pnnl-qcgnoms';
import usDoePnnlRatlle from './us-doe-pnnl-ratlle';
import usDoePnnlMcor from './us-doe-pnnl-mcor';
import usDoePnnlMcrasta from './us-doe-pnnl-mcrasta';
import usDoePnnlMemgaze from './us-doe-pnnl-memgaze';
import usDoePnnlMints from './us-doe-pnnl-mints';
import usDoePnnlNeuralmie from './us-doe-pnnl-neuralmie';
import usDoePnnlPvmlFaultSignatureDetection from './us-doe-pnnl-pvml-fault-signature-detection';
import usDoePnnlQualityInstallTool from './us-doe-pnnl-quality-install-tool';
import usDoePnnlRulesetCheckingTool from './us-doe-pnnl-ruleset-checking-tool';
import usDoePnnlShad from './us-doe-pnnl-shad';
import usDoePnnlStompW from './us-doe-pnnl-stomp-w';
import usDoePnnlTesp from './us-doe-pnnl-tesp';
import usDoePnnlUqMlip from './us-doe-pnnl-uq-mlip';
import usDoeStellopt from './us-doe-stellopt';
import usDoeXicsrt from './us-doe-xicsrt';
import usDoeAsgard from './us-doe-asgard';
import usDoePrunersFlit from './us-doe-pruners-flit';
import usDoeSandiaPyomo from './us-doe-sandia-pyomo';
import usDoeCabbiHseSequenceFinder from './us-doe-cabbi-hse-sequence-finder';
import usDoeLlnlMultiStageFno from './us-doe-llnl-multi-stage-fno';
import usDoeQmcpack from './us-doe-qmcpack';
import usNistDetectionLimits from './us-nist-detection-limits';
import usNistSdnistTemporalMap from './us-nist-sdnist-temporal-map';
import usDoeAmesSigma from './us-doe-ames-sigma';
import usDoeLbnlQnServer from './us-doe-lbnl-qn-server';
import usDoeLbnlQuantnetRealTimeControl from './us-doe-lbnl-quantnet-real-time-control';
import usDoeGenesisCvdvCompiler from './us-doe-genesis-cvdv-compiler';
import usDoeArgonneBestUseOfBiomass from './us-doe-argonne-best-use-of-biomass';
import usDoeStor4Build from './us-doe-stor4build';
import usDoeLanlDiscofluxm from './us-doe-lanl-discofluxm';
import usDoeCathub from './us-doe-cathub';
import usDoeLanlGlopw from './us-doe-lanl-glopw';
import usDoeSunnyJl from './us-doe-sunny-jl';
import usDoeArgonneSwiftT from './us-doe-argonne-swift-t';
import usDoeArgonnePszCusz from './us-doe-argonne-psz-cusz';
import usDoeArgonneTdcosim from './us-doe-argonne-tdcosim';
import usEpaGifmod from './us-epa-gifmod';
import usEpaGlobalAqRft from './us-epa-global-aq-rft';
import usNihScirun from './us-nih-scirun';

export const projects: Project[] = [
  uswds,
  loginGov,
  cloudGov,
  codeGov,
  oscal,
  openmdao,
  energyplus,
  helix,
  accert,
  wecGrid,
  wmpyPower,
  vetsApi,
  codeMil,
  caDesignSystem,
  mayflower,
  govukDesignSystem,
  govukNotify,
  xRoad,
  formsg,
  openfisca,
  chatmd,
  ganttProject,
  webmappVenezia,
  decidim,
  gcNotify,
  brlCad,
  ghidra,
  selinux,
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
  openMct,
  fPrime,
  moose,
  openvsp,
  cfs,
  fireDynamicsSimulator,
  epaSwmm,
  cmaq,
  modflow6,
  federalAuditClearinghouse,
  federalWebsiteIndex,
  goGovSg,
  mockpass,
  webExperienceToolkit,
  assemblyline,
  taipeiCityDashboard,
  leos,
  digitalSignatureService,
  govukPrototypeKit,
  kadasAlbireo,
  laSuiteDocs,
  clienteAfirma,
  cyberchef,
  onyxia,
  nlWallet,
  qualityTime,
  cset,
  scubaGear,
  openLegislation,
  stateCu,
  stateDmi,
  stateMod,
  tsTool,
  ctxHazardApi,
  digitalAnalyticsProgram,
  reactDsfr,
  i14y,
  vitam,
  dashlord,
  swiyuIssuer,
  accessibleAutocomplete,
  demarchesSimplifiees,
  registerTraineeTeachers,
  sitesConformes,
  onsDesignSystem,
  checkV,
  hardwareControl,
  swissFederalMapViewer,
  swissGeodataStacApi,
  agridata,
  fire,
  gftl,
  scales,
  upcxx,
  shine,
  warp,
  oerebViewer,
  javaPathfinder,
  hgdl,
  swissOssCatalog,
  kannIchBohren,
  kssolv,
  oco2Retrieval,
  trustbrokerSwiss,
  swissgeolAssets,
  klartextzh,
  amsterdamDesignSystem,
  dutchApiRegister,
  dutchOssRegister,
  abacus,
  autoct,
  invulhulpen,
  logboekDataverwerkingenJvm,
  gpcam,
  fvgp,
  abrGeocoder,
  dadsDesignTokens,
  pflotran,
  signalen,
  jpNameMatchingModel,
  harunobu,
  donChecker,
  mojxml2geojson,
  oasGenerator,
  repoDocsGenerator,
  imgAnnotationPipeline,
  djangoMagicauth,
  recoco,
  catala,
  esupPod,
  genesearch,
  synbioqcPbj,
  mbinDocker,
  checkfirst,
  postmanSg,
  publicodes,
  archifiltreDocs,
  shinygouv,
  genespace,
  bigslice,
  spacerextractor,
  gepnet,
  inraeDevCas,
  inraeIndicators,
  inraeSava,
  rdvServicePublic,
  oprPaas,
  omgevingsbeleidFrontend,
  decoupageAdministratif,
  dfirOrc,
  acousticImpulseCounter,
  powersheds,
  grnaSeqret,
  hpFlexMpc,
  alaskaLandbirdTrends,
  laSuiteDrive,
  codesPostaux,
  mesAdresses,
  genomeface,
  brantAgeRatioModel,
  climextremes,
  walrusHauloutCartography,
  eelgrassBiomassModel,
  geochemicalDatabaseTools,
  pygarden,
  asyncvol,
  etabli,
  cdata,
  comparia,
  nppsdViz,
  borealBirdDensity,
  schemaDataGouv,
  esupSgc,
  esupSignature,
  opengatellm,
  qfasar,
  seaOtterSurveyViz,
  origenLibraryManager,
  slice,
  drtsans,
  sentinelImageryDownloader,
  trackSegmentation,
  pointCountPhenologySimulation,
  eelgrassPowerAnalysis,
  spaceTimePointProcessModels,
  thinnedPointProcessModels,
  geotrekAdmin,
  xan,
  sdgital2030Output,
  whitehallPublisher,
  gmicCore,
  govScotPublishing,
  publiccodeEditor,
  publiccodeValidatorApi,
  developersItaliaApi,
  publiccodeCrawler,
  publiccodeParserGo,
  pat,
  rndtMetadataCatalogue,
  rndtGeodcatApApi,
  rndtGeoviewer,
  rndtMetadataConverter,
  altinnStudio,
  accessMonitor,
  accessMonitorExtension,
  govukPay,
  digirhythm,
  ateApi,
  ateFrontend,
  fiveGNRad,
  triact,
  updateYourCapitalSchemes,
  munichAtaf,
  munichZms,
  teaPlatform,
  jeapArchrepo,
  jeapAudit,
  jeapBusinessProcessTest,
  autoemulate,
  clevercsv,
  cyclessDatasetCode,
  oawTracker,
  deepsensor,
  graphAttentionReplanner,
  fridge,
  aalmV3,
  airSensorDataUnifier,
  airSensorNetworkAnalysisTool,
  swissgeolBoreholes,
  swissgeolOcr,
  swissgeolViewer,
  aquametBio,
  aquametNwca,
  sarVesselDetectionFpga,
  scivision,
  teaTechniques,
  swiyuDidResolver,
  swiyuDidToolbox,
  swiyuSandboxWallet,
  swiyuVerifier,
  visualize,
  loomSwissArmedForces,
  attila2,
  avert,
  bis,
  syntheticPopulationCatalyst,
  jeapCli,
  jeapCrypto,
  jeapDbSchemaPublisher,
  jeapDeploymentlogService,
  jeapErrorHandling,
  ePetitions,
  bmds,
  gdsApiAdapters,
  gdsSso,
  epaEiaPowerSectorCrosswalk,
  campdFacilityMap,
  govspeak,
  govspeakPreview,
  govukChat,
  hmrcManualsApi,
  manualsPublisher,
  linkCheckerApi,
  govukNotifyDotnetClient,
  govukNotifyJavaClient,
  govukNotifyNodeClient,
  govukNotifyPhpClient,
  cgem,
  chlorineBreakpointCurveSimulator,
  govukDocker,
  plausi,
  govukMirror,
  govukKnowledgeGraph,
  oblique,
  swissFederalDesignSystem,
  chvote,
  govukNotifyPythonClient,
  govukNotifyRubyClient,
  optic14n,
  pasteHtmlToGovspeak,
  placesManager,
  plek,
  publicAssetChecker,
  govukPublisher,
  publishingApi,
  rackLogstasher,
  railsTranslationManager,
  govukRelease,
  govukRouter,
  rubocopGovuk,
  govukSearchAdmin,
  govukSearchApi,
  audiominer,
  opendesk,
  masterportal,
  vecto,
  koha,
  localgovDrupal,
  openGovernmentCommunityBuilder,
  postgresql,
  autoNse,
  autoRefl,
  bpcMonitor,
  savetree,
  set,
  vocal,
  onearth,
  worldview,
  flightview,
  accessMonitorRuleSets,
  autenticacaoGov,
  ntrtsim,
  abaverify,
  apodApi,
  aprilNav,
  bingo,
  atomArchives,
  ccdd,
  cfe,
  cfsCfdp,
  myMonitor,
  ptAccessibilityObservatory,
  cfl3d,
  nasaChannelEmulator,
  cmrOpenSearch,
  atsMilanoPpc,
  docSuitePa,
  nasaCmr,
  nasaDavetools,
  nasaDelta,
  nasaCfsFileManager,
  nasaCfsLimitChecker,
  nasaKodiak,
  nasaLager,
  nasaLegacyMarsGcm,
  nasaGuam,
  nasaCloudBrowse,
  nasaFcx,
  nasaPylot,
  nasaGiant,
  nasaGunns,
  nasaKeplerRobovetter,
  nasaKeplerports,
  nasaKnife,
  nasaEarthdataSearch,
  nasaEarthdataVarinfo,
  nasaEdscEchoforms,
  nasaEdscTimeline,
  montesilvanoGovpayInteractionLayer,
  montesilvanoValoriVenali,
  bariSgvp,
  bariSit,
  genovaEmergenzePcge,
  genovaFascicoloDelCittadino,
  genovaNova,
  caMicroscope,
  cboard,
  ceph,
  compDamDgd,
  cloudCompare,
  lanlSpade,
  lanlTardigradeExamples,
  lanlTurboTurtle,
  lanlBling,
  lanlMathProgIncidence,
  lanlMathOptAi,
  lanlQuantumApplications,
  lanlEdgeBioinformatics,
  lanlAllium,
  lanlAmpSuite,
  lanlAnnoMateMicroSentryAi,
  lanlArchitector,
  lanlArcs,
  lanlAriadne,
  lanlAriannaPpl,
  lanlArtemisAstro,
  lanlAtccFinder,
  lanlAugselfies,
  lanlBindingPrediction,
  lanlBiorad,
  lanlBngsim,
  lanlBohydra,
  lanlHippynn,
  lanlHsiNerfstudio,
  lanlIbexRibbonseparation,
  lanlImpala,
  lanlInfera,
  lanlInverseCnf,
  lanlJ3d,
  lanlLostOcr,
  lanlLunus,
  lanlLvportdriver,
  lanlMatar,
  lanlMetconsin,
  lanlMfLbm,
  lanlMilk,
  lanlMinervachem,
  lanlKessel,
  lanlLafa,
  lanlLambast,
  lanlLatteTraveltime,
  lanlLdrdVirusWork,
  lanlLibquo,
  lanlNomad,
  lanlNubhlight,
  lanlOpenfwi,
  lanlOwl,
  lanlPanhandle,
  lanlPas,
  lanlPfddV2,
  lanlPleiades,
  lanlOsmosis,
  lanlPybnf,
  lanlPycpApr,
  lanlPydnmfk,
  lanlPydntnk,
  lanlPymplot,
  lanlPyptkinetics,
  lanlPyseqm,
  lanlPysimfrac,
  lanlQmdProgress,
  lanlQuantumVolumeInPractice,
  lanlRgm,
  lanlRingPullStrainAnalysis,
  lanlSedacs,
  lanlSeer,
  lanlSingularityEos,
  lanlSingularityOpac,
  lanlSources4d,
  lanlSparseBias,
  lanlSpikingBackprop,
  lanlSplitml,
  lanlSpus,
  lanlSsys,
  lanlSupernu,
  lanlTElf,
  lanlTdaAdversarialDetection,
  lanlThunderboltz,
  lanlTires,
  lanlTransformYourWorld,
  lanlTrees,
  lanlUrsa,
  lanlVpicKokkos,
  lanlWaves,
  lanlYoke,
  lanlZmodelKokkos,
  lanlPselib,
  lanlCov2GenomicgraphtheoryPca,
  lanlCovtransformer,
  lanlBionetgen,
  ornlMuMatScale,
  ornlChathpc,
  ornlCurifactory,
  ornlCyberwheel,
  ornlDaspStacker,
  ornlDdstore,
  ornlDedfoam,
  ornlEquilipy,
  ornlGauntlet,
  ornlHydragnn,
  ornlHydragnnGfmFineTuning4Materials,
  ornlIcat,
  ornlIpyoverlay,
  ornlIris,
  ornlMatey,
  ornlMatris,
  ornlMatsimAgents,
  ornlMlmc,
  ornlNeurocorex,
  ornlOpensampl,
  ornlOrmatex,
  ornlPdmatlab2d,
  ornlPdnetwork,
  ornlPetina,
  ornlPickerxl,
  ornlPresto,
  ornlQuilt,
  ornlReno,
  ornlSagesim,
  ornlAscends,
  ornlNereids,
  ornlNeunorm,
  ornlRustpix,
  ornlSlicer,
  ornlStork,
  ornlSuperneuroabm,
  ornlSuperneuromat,
  ornlThermo4pfm,
  ornlToucan,
  ornlTx2,
  ornlWaveDenoiser,
  ornlWaveDp,
  ornlAdios2,
  ornlBm3dornl,
  ornlBraggedgemodeling,
  ornlIbeatles,
  ornlTdcsophiread,
  ornlPicasso,
  ornlRovidh,
  ornlRuscal,
  epaMarineEmissionsTools,
  epaMcsimmod,
  epaMountainlakes,
  epaWntr,
  epaUseeioWidgets,
  epaUseeior,
  epaVcpy,
  epaWasteLogisticsTool,
  epaWasteStagingTool,
  epaWatersGeoviewer,
  epaWebcms,
  epaWmost,
  epaSpmodel,
  epaSpsurvey,
  epaSsn2,
  epaStewi,
  epaStateior,
  epaStreamcattools,
  epaSupplyChainFactors,
  epaTadashiny,
  epaTelss,
  epaTheManifestGame,
  epaToxvaldbDcapPrep,
  epaTots,
  epaTreecomparer,
  usNistPymdss,
  usDoeParmoo,
  usDoeParsl,
  usDoeSalsython,
  usDoeParflow,
  usDoeNuFastLbl,
  usDoePyLeem,
  usDoeMofa,
  usDoeTlAsdi,
  usDoeYaksa,
  usDoePnnlCimGraph,
  usDoePnnlDbSchemaExportTool,
  usDoePnnlDeconEngineV2,
  usDoePnnlDeconTools,
  usDoePnnlLiquid,
  usDoePnnlMage,
  usDoePnnlMasic,
  usDoePnnlMolecularWeightCalculatorDll,
  usDoePnnlMsFileInfoScanner,
  usDoePnnlMzidToTsvConverter,
  usDoePnnlOboDataConverter,
  usDoePnnlPhrp,
  usDoePnnlProteinCoverageSummarizer,
  usDoePnnlProteinDigestionSimulator,
  usDoePnnlSmaqc,
  usDoePnnlUniprotDatFileParser,
  usDoePnnlBmdrc,
  usDoePnnlCoderdata,
  usDoePnnlSnekmer,
  usDoePnnlSrpAnalytics,
  usDoePnnlIsomatchms,
  usDoePnnlProteoMeter,
  usDoePnnlAptviz,
  usDoePnnlAtlas,
  usDoePnnlBim2rdf,
  usDoePnnlBrainOhsu,
  usDoePnnlBsplineMutualInformation,
  usDoePnnlCactus,
  usDoePnnlChemreasoner,
  usDoePnnlComet,
  usDoePnnlCopper,
  usDoePnnlDancepartner,
  usDoePnnlDatalife,
  usDoePnnlLipidimea,
  usDoePnnlLipidoz,
  usDoePnnlMetabolomicsEnsembleScore,
  usDoePnnlMzapy,
  usDoePnnlQcgnoms,
  usDoePnnlRatlle,
  usDoePnnlMcor,
  usDoePnnlMcrasta,
  usDoePnnlMemgaze,
  usDoePnnlMints,
  usDoePnnlNeuralmie,
  usDoePnnlPvmlFaultSignatureDetection,
  usDoePnnlQualityInstallTool,
  usDoePnnlRulesetCheckingTool,
  usDoePnnlShad,
  usDoePnnlStompW,
  usDoePnnlTesp,
  usDoePnnlUqMlip,
  usDoeStellopt,
  usDoeXicsrt,
  usDoeAsgard,
  usDoePrunersFlit,
  usDoeSandiaPyomo,
  usDoeCabbiHseSequenceFinder,
  usDoeLlnlMultiStageFno,
  usDoeQmcpack,
  usNistDetectionLimits,
  usNistSdnistTemporalMap,
  usDoeAmesSigma,
  usDoeLbnlQnServer,
  usDoeLbnlQuantnetRealTimeControl,
  usDoeGenesisCvdvCompiler,
  usDoeArgonneBestUseOfBiomass,
  usDoeStor4Build,
  usDoeLanlDiscofluxm,
  usDoeCathub,
  usDoeLanlGlopw,
  usDoeSunnyJl,
  usDoeArgonneSwiftT,
  usDoeArgonnePszCusz,
  usDoeArgonneTdcosim,
  usEpaGifmod,
  usEpaGlobalAqRft,
  usNihScirun,
];
