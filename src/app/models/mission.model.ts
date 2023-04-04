export class Mission {
    mission_name: string;
    launch_year: string;
    details: string;
    mission_patch_small: string;
    links: {
      mission_patch_small: string;
      flickr_images: string[];
    };
    flight_number: string;
    launch_date_local: Date;
    launch_success!: boolean;
    rocket!: {
        first_stage: {
          cores: {
            land_success: boolean;
          }[];
        };
      };
    mission_id!:string[] ;
    
  
    constructor(launch_date_local: Date,missionName: string, launchYear: string, details: string, flight_number: string,missionPatchSmall: string, links: any) {
      this.mission_name = missionName;
      this.launch_year = launchYear;
      this.details = details;
      this.mission_patch_small = missionPatchSmall;
      this.links = links;
      this.flight_number = flight_number
      this.launch_date_local = launch_date_local
    }
  }
  