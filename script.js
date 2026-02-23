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
}