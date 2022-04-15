export interface Launch {
    flight_number:           number;
    mission_name?:            string;
    mission_id?:              string[];
    upcoming?:                boolean;
    launch_year?:             string;
    launch_date_unix?:        number;
    launch_date_utc:         Date;
    launch_date_local?:       Date;
    is_tentative?:            boolean;
    tentative_max_precision?: TentativeMaxPrecision;
    tbd?:                     boolean;
    launch_window?:           number | null;
    rocket:                  Rocket;
    ships?:                   string[];
    telemetry?:               Telemetry;
    launch_site:             LaunchSite;
    launch_success?:          boolean | null;
    launch_failure_details?:  LaunchFailureDetails;
    links:                   Links;
    details?:                 null | string;
    static_fire_date_utc?:    Date | null;
    static_fire_date_unix?:   number | null;
    timeline?:                { [key: string]: number } | null;
}

export interface LaunchFailureDetails {
    time?:     number;
    altitude?: number | null;
    reason?:   string;
}

export interface LaunchSite {
    site_id:        SiteID;
    site_name?:      SiteName;
    site_name_long?: SiteNameLong;
}

export enum SiteID {
    CcafsSlc40 = "ccafs_slc_40",
    KscLc39A = "ksc_lc_39a",
    KwajaleinAtoll = "kwajalein_atoll",
    VafbSlc4E = "vafb_slc_4e",
}

export enum SiteName {
    CcafsSlc40 = "CCAFS SLC 40",
    KscLc39A = "KSC LC 39A",
    KwajaleinAtoll = "Kwajalein Atoll",
    VafbSlc4E = "VAFB SLC 4E",
}

export enum SiteNameLong {
    CapeCanaveralAirForceStationSpaceLaunchComplex40 = "Cape Canaveral Air Force Station Space Launch Complex 40",
    KennedySpaceCenterHistoricLaunchComplex39A = "Kennedy Space Center Historic Launch Complex 39A",
    KwajaleinAtollOmelekIsland = "Kwajalein Atoll Omelek Island",
    VandenbergAirForceBaseSpaceLaunchComplex4E = "Vandenberg Air Force Base Space Launch Complex 4E",
}

export interface Links {
    mission_patch?:       null | string;
    mission_patch_small?: null | string;
    reddit_campaign?:     null | string;
    reddit_launch?:       null | string;
    reddit_recovery?:     null | string;
    reddit_media?:        null | string;
    presskit?:            null | string;
    article_link?:        null | string;
    wikipedia?:           null | string;
    video_link?:          null | string;
    youtube_id?:          null | string;
    flickr_images:       string[];
}

export interface Rocket {
    rocket_id?:    RocketID;
    rocket_name?:  RocketName;
    rocket_type?:  RocketType;
    first_stage:  FirstStage;
    second_stage: SecondStage;
    fairings?:     Fairings | null;
}

export interface Fairings {
    reused?:           boolean;
    recovery_attempt?: boolean | null;
    recovered?:        boolean | null;
    ship?:             null | string;
}

export interface FirstStage {
    cores: Core[];
}

export interface Core {
    core_serial?:     null | string;
    flight?:          number | null;
    block?:           number | null;
    gridfins?:        boolean | null;
    legs?:            boolean | null;
    reused?:          boolean | null;
    land_success?:    boolean | null;
    landing_intent?:  boolean | null;
    landing_type?:    LandingType | null;
    landing_vehicle?: LandingVehicle | null;
}

export enum LandingType {
    Asds = "ASDS",
    Ocean = "Ocean",
    Rtls = "RTLS",
}

export enum LandingVehicle {
    Jrti = "JRTI",
    Jrti1 = "JRTI-1",
    Lz1 = "LZ-1",
    Lz2 = "LZ-2",
    Lz4 = "LZ-4",
    Ocisly = "OCISLY",
}

export enum RocketID {
    Falcon1 = "falcon1",
    Falcon9 = "falcon9",
    Falconheavy = "falconheavy",
}

export enum RocketName {
    Falcon1 = "Falcon 1",
    Falcon9 = "Falcon 9",
    FalconHeavy = "Falcon Heavy",
}

export enum RocketType {
    Ft = "FT",
    MerlinA = "Merlin A",
    MerlinC = "Merlin C",
    V10 = "v1.0",
    V11 = "v1.1",
}

export interface SecondStage {
    block:    number | null;
    payloads: Payload[];
}

export interface Payload {
    payload_id?:        string;
    norad_id?:          number[];
    reused?:            boolean;
    customers?:         string[];
    nationality?:       string;
    manufacturer?:      null | string;
    payload_type?:      PayloadType;
    payload_mass_kg?:   number | null;
    payload_mass_lbs?:  number | null;
    orbit?:             string;
    orbit_params?:      OrbitParams;
    cap_serial?:        null | string;
    mass_returned_kg?:  number | null;
    mass_returned_lbs?: number | null;
    flight_time_sec?:   number | null;
    cargo_manifest?:    null | string;
}

export interface OrbitParams {
    reference_system?:   ReferenceSystem | null;
    regime?:             Regime | null;
    longitude?:          number | null;
    semi_major_axis_km?: number | null;
    eccentricity?:       number | null;
    periapsis_km?:       number | null;
    apoapsis_km?:        number | null;
    inclination_deg?:    number | null;
    period_min?:         number | null;
    lifespan_years?:     number | null;
    epoch?:              Date | null;
    mean_motion?:        number | null;
    raan?:               number | null;
    arg_of_pericenter?:  number | null;
    mean_anomaly?:       number | null;
}

export enum ReferenceSystem {
    Geocentric = "geocentric",
    Heliocentric = "heliocentric",
    HighlyElliptical = "highly-elliptical",
    Selenocentric = "selenocentric",
}

export enum Regime {
    Geostationary = "geostationary",
    Geosynchronous = "geosynchronous",
    HighEarth = "high-earth",
    L1Point = "L1-point",
    LowEarth = "low-earth",
    SemiSynchronous = "semi-synchronous",
    SubOrbital = "sub-orbital",
    SunSynchronous = "sun-synchronous",
}

export enum PayloadType {
    CrewDragon = "Crew Dragon",
    Dragon10 = "Dragon 1.0",
    Dragon11 = "Dragon 1.1",
    DragonBoilerplate = "Dragon Boilerplate",
    Lander = "Lander",
    Satellite = "Satellite",
    Unknown = "Unknown",
}

export interface Telemetry {
    flight_club?: null | string;
}

export enum TentativeMaxPrecision {
    Day = "day",
    Half = "half",
    Hour = "hour",
    Month = "month",
    Quarter = "quarter",
}
