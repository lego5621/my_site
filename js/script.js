
window.onload = function(){ 
    let projects = document.getElementById("projects");
    projects.onclick = show_content_projects;

    let skills = document.getElementById("skills");
    skills.onclick = content_skill_projects;

    let info = document.getElementById("info");
    info.onclick = content_info_projects;

    let home = document.getElementById("home");
    home.onclick = show_image;

    let batton_menu_mob = document.getElementsByClassName('batton_menu_mob');
    for (let batton of batton_menu_mob) {
        batton.onclick = show_image;;
    }


    function hide_imege(){
        event.stopPropagation(); 
        let submenu = document.getElementById('submenu');
        let menu = document.getElementById('menu');
        let content = document.getElementById('content');

        submenu.classList.add("submenu_activ");
        menu.classList.add("menu_activ");
        content.classList.add("content_activ");
    }

    function show_content_projects(){
        hide_imege();
        setTimeout(a, 800)
        function a (){
            let content_projects = document.getElementById('content_projects');
            let content_skill = document.getElementById('content_skill');
            let content_info = document.getElementById('content_info');

            
            content_skill.classList.remove("content_skill_activ");
            content_info.classList.remove("content_info_activ");
            content_projects.classList.add("content_projects_activ");
        }
        
    }

    function content_skill_projects(){
        hide_imege();
        setTimeout(a, 800)
        function a (){
            let content_projects = document.getElementById('content_projects');
            let content_skill = document.getElementById('content_skill');
            let content_info = document.getElementById('content_info');

            
            content_skill.classList.add("content_skill_activ");
            content_info.classList.remove("content_info_activ");
            content_projects.classList.remove("content_projects_activ");
        }
        
    }

    function content_info_projects(){
        hide_imege();
        setTimeout(a, 800)
        function a (){
            let content_projects = document.getElementById('content_projects');
            let content_skill = document.getElementById('content_skill');
            let content_info = document.getElementById('content_info');

            
            content_skill.classList.remove("content_skill_activ");
            content_info.classList.add("content_info_activ");
            content_projects.classList.remove("content_projects_activ");
        }
        
    }
    
    function show_image(){
        let content_projects = document.getElementById('content_projects');
        let content_skill = document.getElementById('content_skill');
        let content_info = document.getElementById('content_info');

        
        content_skill.classList.remove("content_skill_activ");
        content_info.classList.remove("content_info_activ");
        content_projects.classList.remove("content_projects_activ");

        setTimeout(v, 500)
        function v (){
            let submenu = document.getElementById('submenu');
            let menu = document.getElementById('menu');
            let content = document.getElementById('content');

                   
            submenu.classList.remove("submenu_activ");
            menu.classList.remove("menu_activ");
            content.classList.remove("content_activ");
        }
    }


}
