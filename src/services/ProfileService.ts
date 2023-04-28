import { getRepository } from "typeorm";
import { Profile } from "../entity/Profile";

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class ProfileService {
    createProfile = async (profile: Profile) => {
        let createProfile = getRepository(Profile).create(profile);
        let result = await getRepository(Profile).save(createProfile);
        return result;
    }

    registration = async (profile: Profile) => {
        profile.password = bcrypt.hashSync(profile.password, 10)
        let createProfile = getRepository(Profile).create(profile);
        let result = await getRepository(Profile).save(createProfile);
        return result;
    }
    
    login = async (email: String, password: String) => {
        let result = await getRepository(Profile).findOne({
            where: {
                email: email
            },
            relations: ['student']
        });
        const validPass = bcrypt.compareSync(password, result.password);
        if(!result || !validPass) throw new Error("");
        return { token: this.getToken(result.id)};
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

    getToken(id: number) {
        return jwt.sign({id},
            process.env.SECRET_KEY,
            {expiresIn: process.env.LIFE_TIME_KEY})
    }
}

export default new ProfileService();