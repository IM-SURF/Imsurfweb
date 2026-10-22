/* Public configuration: URLs are NOT secrets. SharePoint enforces access.
   Replace each explicit placeholder with the HTTPS URL copied from its folder.
   Use links for People with existing access; never Anyone links.
   Folder names below are a proposed structure to create in SharePoint. */
window.IM_SURF_DATA = {
  allowedHosts: ["geodynamiquestructure-my.sharepoint.com"],
  repositoryUrl: "https://geodynamiquestructure-my.sharepoint.com/:f:/g/personal/carolina_franco_geodynamique_com/IgDZo7aAf71eS4ZzTBCemqxrATaswzm55c_kFxZCBO-uFG4?e=XVYhz0",
  modulateUrl: "https://geodynamiquestructure-my.sharepoint.com/:f:/g/personal/carolina_franco_geodynamique_com/IgCunguQ8mTBT4EbJeOJ06GFAdedZl8LVd0W_o0IbshA5f0?e=H7iaV6",
  workPackages: [
    { id: "WP1", title: "Project Management and Dissemination of results", url: "https://geodynamiquestructure-my.sharepoint.com/:f:/g/personal/carolina_franco_geodynamique_com/IgA6iR81bRyURIGUghnbUJRJAeG4bRHPVBgLCKmBM3gresY?e=miQ5Eh", folders: [
      {name:"01 · Project management", url:"REPLACE_WITH_WP1_MANAGEMENT_URL"},
      {name:"02 · Meetings and minutes", url:"REPLACE_WITH_WP1_MEETINGS_URL"},
      {name:"03 · Deliverables and dissemination", url:"REPLACE_WITH_WP1_DELIVERABLES_URL"}] },
    { id: "WP2", title: "Enrichment of existing strong motion databases for surface wave studies", url: "https://geodynamiquestructure-my.sharepoint.com/:f:/g/personal/carolina_franco_geodynamique_com/IgDq03jhdl8NQq_uw4KedKdwAUOqYy8XQUSvh8dsJe006qA?e=G197pn", folders: [
      {name:"01 · Raw data", url:"REPLACE_WITH_WP2_RAW_URL"},
      {name:"02 · Processed data", url:"REPLACE_WITH_WP2_PROCESSED_URL"},
      {name:"03 · Metadata and documentation", url:"REPLACE_WITH_WP2_METADATA_URL"}] },
    { id: "WP3", title: "Numerical techniques for obtaining full 3D wave regimes from the geological to the geotechnical scale", url: "https://geodynamiquestructure-my.sharepoint.com/:f:/g/personal/carolina_franco_geodynamique_com/IgBISTRSjBIyS6X2xgxSGsOSAWYV1EYBgh44g07NS3duYpw?e=u6pVuo", folders: [
      {name:"01 · Models and input data", url:"REPLACE_WITH_WP3_MODELS_URL"},
      {name:"02 · Simulation results", url:"REPLACE_WITH_WP3_RESULTS_URL"},
      {name:"03 · Scripts and documentation", url:"REPLACE_WITH_WP3_SCRIPTS_URL"}] },
    { id: "WP4", title: "Development of numerical techniques for seismic SSI calculations with complete wave regime and presence of strong nonlinearities in the near field", url: "https://geodynamiquestructure-my.sharepoint.com/:f:/g/personal/carolina_franco_geodynamique_com/IgBBfM89i9e7R7b7_VAv3it3Afl8wGsToS1kejYJqhm4pMU?e=o1fvUs", folders: [
      {name:"01 · Models and input data", url:"REPLACE_WITH_WP4_MODELS_URL"},
      {name:"02 · Simulation results", url:"REPLACE_WITH_WP4_RESULTS_URL"},
      {name:"03 · Validation and documentation", url:"REPLACE_WITH_WP4_VALIDATION_URL"}] },
    { id: "WP5", title: "Seismic performance of structures of large dimensions subjected to the incidence of “3D” motions with surface waves", url: "https://geodynamiquestructure-my.sharepoint.com/:f:/g/personal/carolina_franco_geodynamique_com/IgAJ1G6SoiqGTZeFvHGNxcN4AfUDS6-gKLcsg4JmauDkkOI?e=d6hqHn", folders: [
      {name:"01 · Case studies and input data", url:"REPLACE_WITH_WP5_CASES_URL"},
      {name:"02 · Performance results", url:"REPLACE_WITH_WP5_RESULTS_URL"},
      {name:"03 · Guidelines and documentation", url:"REPLACE_WITH_WP5_GUIDELINES_URL"}] }
  ]
};
