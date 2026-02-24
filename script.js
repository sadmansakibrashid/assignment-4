let interviewList =[];
let rejectedList =[];

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
    
    selected.classList.remove('bg-[#FFFFFF]','text-black')
    selected.classList.add('bg-[#3B82F6]','text-[#FFFFFF]')

    if(id=='interview-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
    }else if(id=='all-filter-btn'){
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
    }
}

mainContainer.addEventListener('click',function(event){
    if(event.target.classList.contains('interview-btn'))
    {
        // console.log(event.target.parentNode.parentNode);
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.companyName').innerText;
    // console.log(companyName);
    const roleName = parentNode.querySelector('.roleName').innerText;
    const jobInfo = parentNode.querySelector('.job-info')
    const status = parentNode.querySelector('.status').innerText
    const notes = parentNode.querySelector('.notes').innerText
    // const interviewBtn = parentNode.querySelector('.interview-btn')
    // const rejectedBtn = parentNode.querySelector('.rejected-btn')
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
    calculateCount()
    renderThriving()
    }
})
    
    function renderThriving(){
        filterSection.innerHTML=''

        for(let thrive of interviewList){
            console.log(thrive)
             let div =document.createElement('div');
             div.className='card flex justify-between bg-[#FFFFFF] p-4 rounded-lg mb-2'
             div.innerHTML=`    <div class="space-y-2">
                    <!-- part1 -->
                    <div>
                        <p class="companyName">${thrive.companyName}</p>
                        <p class="roleName mb-4 text-[#64748B]">React Native Developer</p>
                        <p class="job-info text-[#64748B]">Remote . Full-time . $130,000 - $175,000
                    </p>
                    </div>
                    <!-- part2 -->
                     
                    <p class="status bg-[#EEF4FF] w-[113px] p-2">${thrive.status}</p>
                     <p class="notes text-[#323B49]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    

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
