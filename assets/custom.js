const services = [
    {
        title:'Complete Housekeeping Service.',
        img:'Housekeeping.png',
        discreption:'We provides all types of cleaning solutions, so people can contact us for their cleaning needs… Some of the services are given below. <h2></h2>Professional housekeeping services in factories, corporate offices, shopping malls, and villas of, all the localities of Mumbai, Thane and Navi-Mumbai. One Time Deep Cleaning Services for residential and commercial premises.'
    }
    ,{
        title:'Deep Carpet Cleaning Service.',
        img:'carpet.png',
        discreption:'We are also specialized in grooming carpets of domestic and commercial premises… We also disinfect the carpets, so that, not only it looks clan but also safe to use…'
    }
    ,{
        title:'Mechanized Floor Cleaning Service.',
        img:'floor1.png',
        discreption:'Our team is trained and specialized in all cleaning tasks, including Deep Floor Cleaning… We are using high quality cleaning devices to provide a best cleaning solutions. In addition, we are using best cleaning chemicals to deliver the effective result. \n We also provide stain removal service with the help of professional scrubbers and standard chemicals'
    }
    ,{
        title:'Kitchen Area Deep Clean Service.',
        img:'kichten.png',
        discreption:'We understand the importance of cleanliness in kitchen area, especially if you are running a restaurant of food-joint than it is the most important need… So we designed a complete solution for kitchen area clean needs… We cover all the parts of the kitchen, including bad order removal and disinfect it too… In addition, we also apply specialized pest control solutions too.'
    }
    ,{
        title:'Toilet & Bathroom Cleaning Services…',
        img:'toilet.png',
        discreption:'We do provides cleaning and stain removal services for toilet and bathrooms… Our team using customized equipments which gives a new look to your toilet and bathrooms..'
    }
    ,{
        title:'Facade and Window cleaning service.',
        img:'window.png',
        discreption:'Corporates and Domestic premises have a need of glass-cleaning services too, and we are offering such solutions also. So now no need to worry about any stain on your outer or inner glass of your window, because we are ready to take care of them completely.'
    }
    ,{
        title:'Furniture Grooming Service.',
        img:'furniture.png',
        discreption:'Now no need to worry about the grooming need of your old-furniture… Because we are prepared to groom them and give them a fresh look. You just need to contact us for your different cleaning and grooming needs of your domestic or commercial premises, and rest of the task will be ours…'
    }
]
const servicecards = document.getElementById('servicecards');

services.map((val,ind)=>{
    let div = document.createElement('div');
    div.className = "col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 m-b-3";
    
    div.innerHTML = ` 
    <!-- Card -->
    <div class="card animated slower slideInLeft">
     <img class="card-img-top img-responsive pl-5 pr-5" style="margin-bottom: -3rem; z-index: 1;"
      src="assets/img/${val.img}" alt="${val.title}">
      <div class="card-body glass" style="padding-top: 3rem;">
        <h4 class="card-title">${val.title}</h4>
        <p class="card-text">
        ${val.discreption}
        </p>
      </div>
    </div>
    <!-- Card --> `;
    
    servicecards.appendChild(div)
});


