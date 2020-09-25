import constants from "../../../modules/constants";
import { 
    findOneUser,
    findUserByIdAndUpdate,
    findUserById,
    findUser
} from "../../repositories/user";




export const postAddContact = async (req, res) => {
    const {
        nickname: contactUserNickname
    } = req.body;
    const {
        _id: contactOwnerId
    } = req.currentUser;

    try {   
        const contactUser = await findOneUser({ nickname: contactUserNickname });
        if(contactUser._id){
            await findUserByIdAndUpdate(
                contactOwnerId,
                { $addToSet: {
                        contacts: {  
                            constactUserId: contactUser._id
                        } 
                    } 
                }
            );
            res.status(200)
                .json({
                    success: true,
                    errors: {}
                });
        }else{
            res.status(401)
                .json({
                    success: false,
                    errors: constants.USER_WITH_SHICH_NICKNAME_DOESNT_EXIST
                });
        }
    }catch(error){
        res.status(500)
            .json({
                success: false,
                errors: error.message
            });
    }
}

export const deleteContact = async (req, res) => {
    const { _id: deleteUserId } = req.body;
    const { _id: userId } = req.currentUser;  
    try{
        await findUserByIdAndUpdate(userId, {
            $pull: { 
                contacts: { 
                    contactUserId: deleteUserId 
                } 
            }
        });
        res.status(200)
                .json({
                    success: true,
                    errors: {}
                });
    }catch(error){
        res.status(500)
            .json({
                success: false,
                errors: error.message
            });
    }
}

export const getContacts = async (req, res) => {
    const { _id } = req.currentUser;
    try{
        const user = await findUserById(_id);
        if(user._id){
            const contacts = await findUser({
                    _id: { $in: user.contacts.map(item => item.contactUserId) }
                },{
                    password: false,
                    contacts: false
                }
            );
            res.status(200)
                .json({
                    success: true,
                    result: contacts
                });
        }else{
            res.status(500)
                .json({
                    success: false,
                    errors:{}
                });    
        }    
    }catch(error){
        res.status(500)
            .json({
                success: false,
                errors: error.message
            });
    }
}

