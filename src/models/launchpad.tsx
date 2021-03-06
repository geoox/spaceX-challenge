export interface Launchpad {
    id?:                  number;
    status?:              string;
    location:            Location;
    vehicles_launched:   string[];
    attempted_launches?:  number;
    successful_launches?: number;
    wikipedia?:           string;
    details?:             string;
    site_id?:             string;
    site_name_long?:      string;
    name?:                string;
}

export interface Location {
    name?:      string;
    region?:    string;
    latitude:  number;
    longitude: number;
}