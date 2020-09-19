const {
    UserModel
} = absoluteRequire("db/models/user");

exports.addUser = model => {
    const user = UserModel({
        nickname: model.nickname,
        password: model.password,
        profileColor: model.profileColor
    });
    return user.save();
}

/* 
exports.findOneUser = (query, params) */