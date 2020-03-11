getProfileOnGithub = async () => {
        
        try{
         
                const response = await api.get('https://api.github.com/users/LuizPauloLPG2/repos');

                const { data: dados, status, statusText: msg } = response;
                
                console.log(dados);
                console.log(status);
                console.log(msg);
                
        }catch(error){
                console.log(error);     
        }
        
}
