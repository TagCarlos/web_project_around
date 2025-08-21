export default class UserInfo{
    constructor({nameSelector, jobSelector}){
        this.nameElement = document.querySelector(nameSelector);
        this.jobElement = document.querySelector(jobSelector);
    };

    //devuelve un objeto con informacion sobre el usuario
    getUserInfo(){
        return{
            name: this.nameElement.textContent,
            job: this.jobElement.textContent 
        };
    };

    //agrega los datos del usuario
    setUserInfo({userName, userJob}){
        this.nameElement.textContent = userName;
        this.jobElement.textContent = userJob;
    };
}