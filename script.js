let interviewList =[];
let rejectedList =[];
let currentStatus ='all'

let total = document.getElementById('total');
let interview = document.getElementById('interview');
let rejected = document.getElementById('rejected');

const allCardSection = document.getElementById('allCards');

const mainContainer = document.querySelector('main');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const filterSection = document.getElementById('filtered-section')
function calculateCount(){
    total.innerText = allCardSection.children.length;
    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;

}

calculateCount()

function toggleStyle(id){
    // console.log("click",id);
    allFilterBtn.classList.remove('bg-[#3B82F6]','text-[#FFFFFF]')
    interviewFilterBtn.classList.remove('bg-[#3B82F6]','text-[#FFFFFF]')
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]','text-[#FFFFFF]')
    
    allFilterBtn.classList.add('bg-[#FFFFFF]','text-black')
    interviewFilterBtn.classList.add('bg-[#FFFFFF]','text-black')
    rejectedFilterBtn.classList.add('bg-[#FFFFFF]','text-black')

    const selected = document.getElementById(id)
    currentStatus = id
    
    selected.classList.remove('bg-[#FFFFFF]','text-black')
    selected.classList.add('bg-[#3B82F6]','text-[#FFFFFF]')

    if(id=='interview-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderThriving()
    }else if(id=='all-filter-btn'){
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
    }
    else if(id=='rejected-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected()
    }
}

mainContainer.addEventListener('click',function(event){
    if(event.target.classList.contains('interview-btn'))
    {
        
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.companyName').innerText;
   
    const roleName = parentNode.querySelector('.roleName').innerText;
    const jobInfo = parentNode.querySelector('.job-info').innerText
    const status = parentNode.querySelector('.status').innerText
    const notes = parentNode.querySelector('.notes').innerText
    
   parentNode.querySelector('.status').innerText='INTERVIEW'
    const cardInfo ={companyName,
        roleName,
        jobInfo,
        status:'INTERVIEW',
        notes
    }
    
    const companyExist=
    interviewList.find(item=> item.companyName==cardInfo.companyName);
   
    if(!companyExist){
        interviewList.push(cardInfo)
    }
    rejectedList=rejectedList.filter(item=>item.companyName!=cardInfo.companyName)

    calculateCount()
    if(currentStatus=='rejected-filter-btn')
    {renderRejected()}
    }
    else if(event.target.classList.contains('rejected-btn'))
    {
        
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.companyName').innerText;
   
    const roleName = parentNode.querySelector('.roleName').innerText;
    const jobInfo = parentNode.querySelector('.job-info').innerText
    const status = parentNode.querySelector('.status').innerText
    const notes = parentNode.querySelector('.notes').innerText
    // const interviewBtn = parentNode.querySelector('.interview-btn')
    // const rejectedBtn = parentNode.querySelector('.rejected-btn')
   parentNode.querySelector('.status').innerText='REJECTED'
    const cardInfo ={companyName,
        roleName,
        jobInfo,
        status:'REJECTED',
        notes
    }
    
    const companyExist=
    rejectedList.find(item=> item.companyName==cardInfo.companyName);
   
    if(!companyExist){
        rejectedList.push(cardInfo)
    }

    interviewList=interviewList.filter(item=>item.companyName!=cardInfo.companyName);
    if(currentStatus=="interview-filter-btn"){
        renderThriving();
    }

    calculateCount()
    // renderRejected()
    }
})
    
    function renderThriving(){
        filterSection.innerHTML=''


if(interviewList.length === 0){
        filterSection.innerHTML = `
          
        <div class="bg-[#FFFFFF] p-10 rounded-lg text-center">
                <img class="mx-auto mb-4 w-12" src="jobs.png" alt="">
                <h2 class="text-xl font-semibold text-[#002C5C]">No jobs available</h2>
                <p class="text-[#64748B]">Check back soon for new job opportunities</p>
            </div>
        `;
        
    }




        for(let thrive of interviewList){
            // console.log(thrive)
             let div =document.createElement('div');
             div.className='card flex justify-between bg-[#FFFFFF] p-4 rounded-lg mb-2'
             div.innerHTML=`    <div class="space-y-2">
                    <!-- part1 -->
                    <div>
                        <p class="companyName">${thrive.companyName}</p>
                        <p class="roleName mb-4 text-[#64748B]">${thrive.roleName}</p>
                        <p class="job-info text-[#64748B]">${thrive.jobInfo}
                    </p>
                    </div>
                    <!-- part2 -->
                     
                    <p class="status bg-[#EEF4FF] w-[113px] p-2">${thrive.status}</p>
                     <p class="notes text-[#323B49]">${thrive.notes}</p>
                    

                     <div>
                        <button class="interview-btn border-2 border-[#10B981] text-[#10B981] p-2 font-semibold">INTERVIEW</button>
                        <button class="rejected-btn border-2 border-[#EF4444] text-[#EF4444] p-2 font-semibold">Rejected</button>
                     </div>
                </div>
                <!-- main part 2 -->
                <div>
                    <button><img src="Group 1.png" alt=""></button>
                    
                </div>
             `
             filterSection.appendChild(div)

    }
}

   function renderRejected(){
        filterSection.innerHTML=''

    if(rejectedList.length === 0){
        filterSection.innerHTML = `
            <div class="bg-[#FFFFFF] p-10 rounded-lg text-center">
                <img class="mx-auto mb-4 w-12" src="jobs.png" alt="">
                <h2 class="text-xl font-semibold text-[#002C5C]">No jobs available</h2>
                <p class="text-[#64748B]">Check back soon for new job opportunities</p>
            </div>
        `;
        return;
    }


        for(let reject of rejectedList){
            // console.log(reject)
             let div =document.createElement('div');
             div.className='card flex justify-between bg-[#FFFFFF] p-4 rounded-lg mb-2'
             div.innerHTML=`    <div class="space-y-2">
                    <!-- part1 -->
                    <div>
                        <p class="companyName">${reject.companyName}</p>
                        <p class="roleName mb-4 text-[#64748B]">${reject.roleName}</p>
                        <p class="job-info text-[#64748B]">${reject.jobInfo}
                    </p>
                    </div>
                    <!-- part2 -->
                     
                    <p class="status bg-[#EEF4FF] w-[113px] p-2">${reject.status}</p>
                     <p class="notes text-[#323B49]">${reject.notes}</p>
                    

                     <div>
                        <button class="interview-btn border-2 border-[#10B981] text-[#10B981] p-2 font-semibold">INTERVIEW</button>
                        <button class="rejected-btn border-2 border-[#EF4444] text-[#EF4444] p-2 font-semibold">Rejected</button>
                     </div>
                </div>
                <!-- main part 2 -->
                <div>
                    <button><img src="Group 1.png" alt=""></button>
                    
                </div>
             `
             filterSection.appendChild(div)

    }
}
