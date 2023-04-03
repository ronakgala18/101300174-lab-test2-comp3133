export class Mission {
    mission_name: string;
    launch_year: string;
    details: string;
    mission_patch_small: string;
    links: {
      mission_patch_small: string;
      flickr_images: string[];
    };
  
    constructor(missionName: string, launchYear: string, details: string, missionPatchSmall: string, links: any) {
      this.mission_name = missionName;
      this.launch_year = launchYear;
      this.details = details;
      this.mission_patch_small = missionPatchSmall;
      this.links = links;
    }
  }
  