import { getRepository } from "typeorm";
import { Profile } from "../entity/Profile";

class ProfileService {
    createProfile = async (profile: Profile) => {
        let createProfile = getRepository(Profile).create(profile);
        let result = await getRepository(Profile).save(createProfile);
        return result;
    }

    getAllProfiles = async () => {
        let allProfiles = await getRepository(Profile).find(); 
        console.log("Cmpt: " + JSON.stringify(allProfiles));
        return allProfiles;
    }

    getProfileById = async(id: number) => {
        if(!id) return;
        let profile = await getRepository(Profile).findOne(id);
        return profile;
    }

    saveProfile = async(profile: Profile) => {
        if(!profile) return;
        let saveProfile = await getRepository(Profile).save(profile);
        return saveProfile;
    }

    deleteProfile = async(id: number) => {
        if(!id) return;
        return await getRepository(Profile).delete(id);
    }
}

export default new ProfileService();