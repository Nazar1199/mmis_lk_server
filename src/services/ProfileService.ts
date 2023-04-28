import { getRepository } from "typeorm";
import { Profile } from "../entity/Profile";

class ProfileService {
    createProfile = async (profile: Profile) => {
        let createProfile = getRepository(Profile).create(profile);
        let result = await getRepository(Profile).save(createProfile);
        return result;
    }
    
    login = async (email: String, password: String) => {
        let result = await getRepository(Profile).findOne({
            where: {
                email: email,
                password: password
            }
        });
        console.log("Найден профиль: ", result);
        if(!result) throw new Error("");
        return result;
    }

    getAllProfiles = async () => {
        let allProfiles = await getRepository(Profile).find(); 
        console.log("Profiles: " + JSON.stringify(allProfiles));
        return allProfiles;
    }

    getProfileById = async(id: number) => {
        console.log("Найти профиль с id: ", id);
        if(!id) throw new Error("");
        let profile = await getRepository(Profile).findOne({
            where: {id: id}
        });
        if(!profile) throw new Error("");
        console.log("Найден профиль: ", profile);
        return profile;
    }

    saveProfile = async(profile: Profile) => {
        if(!profile) throw new Error("");
        let saveProfile = await getRepository(Profile).save(profile);
        return saveProfile;
    }

    deleteProfile = async(id: number) => {
        if(!id) throw new Error("");
        return await getRepository(Profile).delete(id);
    }
}

export default new ProfileService();