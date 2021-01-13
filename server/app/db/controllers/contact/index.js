import constants from "../../../modules/constants";
import { 
    findOneUser,
    findUserByIdAndUpdate,
    findUserById,
    findUser
} from "../../repositories/user";



/*
    req = {
        body: {
            nickname
        }
    }
*/
export const postAddContact = async (req, res) => {
    try {   
        const { nickname: contactUserNickname } = req.body;
        const { _id: contactOwnerId } = req.currentUser;
        
        const contactUser = await findOneUser({ 
                nickname: contactUserNickname 
            },{
                nickname: false,
                profileColor: false,
                contacts: false,
                password: false
            }
        );

        if(contactUser && contactUser._id){
            const checkedContact = await findOneUser({
                _id: contactOwnerId,
                contacts: {
                    $elemMatch: { contactUserId: contactUser._id }
                }
            });
            if(checkedContact && checkedContact._id){
                throw new Error(constants.VALIDATION_MESSAGES.ALREADY_IN_CONTACTS);
            }
            await findUserByIdAndUpdate(
                contactOwnerId,
                { $addToSet: {
                        contacts: {  
                            contactUserId: contactUser._id
                        } 
                    } 
                }
            );
            res.status(200).send();
        }else{
            res.status(401).send(constants.VALIDATION_MESSAGES.USER_WITH_SHICH_NICKNAME_DOESNT_EXIST);
        }
    }catch(error){
        res.status(500).send(error.message);
    }
}

/*
    req = {
        body: {
            _id
        }
    }
*/
export const deleteContact = async (req, res) => {  
    try{
        const { _id: deleteUserId } = req.body;
        const { _id: userId } = req.currentUser;

        await findUserByIdAndUpdate(userId, {
            $pull: { 
                contacts: {
                        contactUserId: deleteUserId
                } 
            }
        });
        res.status(200).send();
    }catch(error){
        res.status(500).send(error.message);
    }
}


/*
    req = {
        body:{}
    }
*/
export const getContact = async (req, res) => {
    try{
        const { nickname } = req.params;

        const contact = await findOneUser({ nickname }, 
            { 
                refreshTokens: false,
                password: false,
                contacts: false, 
                __v: false 
            }
        );
        res.status(200)
            .json({
                success: true,
                contact
            });    
    }catch(error){
        return res.sendStatus(500);
    }
}

