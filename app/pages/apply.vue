<template>
    <main class="w-full p-5 flex flex-col gap-2 items-center">
        <header class="w-full flex flex-col gap-1 items-start">
            <NuxtImg src="/logo1.1.png" alt="Berows logo" format="webp" loading="lazy" class="w-25 h-20" />
            <NuxtLink to="/admission" class="text-green-900 font-bold underline">&larr; admission</NuxtLink>
        </header>

        <div class="w-full pt-10 flex flex-col gap-4 items-start">
            <div class="text-red-700"><p><b>NOTE:</b> Endevour to pay the application fee before filling the application form below.</p></div>
            <NuxtLink to="/applicationFee" target="_blank" class="w-fit py-3 px-5 bg-amber-600 rounded-lg">Pay Application Fee</NuxtLink>
        </div>

        <form @submit.prevent="submitApplication()" class="w-fit p-8 flex flex-col gap-2 items-center">
            <h1 class="my-5 font-bold text-2xl">Application Form</h1>
<!--############# UTME Result #################-->
            <legend class="my-5 font-bold">UTME result</legend>
            <div class="bg-gray-200 p-4 rounded-2xl drop-shadow-lg">
                <div class="w-full flex items-baseline gap-2">
                    <label for="utme-reg-number" class="font-bold">Registration Number: </label>
                    <input type="text" name="utme-reg-number" v-model="utmeRegNum" class="w-90 border-2 border-black rounded-xl bg-gray-100 p-2">
                </div>
                <div class="flex gap-4">
                    <div class="flex flex-col gap-6">
                        <div class="flex flex-col gap-2">
                            <!--1-->
                            <label for="utme-subject1">first subject:</label>
                            <select name="utme-subject1" id="utme-subject1" v-model="utmeSubject1.subject" class="border-2 border-black rounded-xl bg-gray-100 p-4">
                                <span v-for="(subject, index) in utmeSubjects" :key="index">
                                    <optgroup v-if="subject.field === 'compulsory'" :label="subject.field">
                                        <option :value="subject.value">{{ subject.name }}</option>
                                    </optgroup>
                                </span>
                            </select>
                        </div>
                        <!-------------------------------------------------------------------------->
                        <div class="flex flex-col gap-2">
                            <!--2-->
                            <label for="utme-subject2">second subject:</label>
                            <select name="utme-subject2" id="utme-subject2" v-model="utmeSubject2.subject" class="border-2 border-black rounded-xl bg-gray-100 p-4">
                                <optgroup label="art/humanity">
                                    <span  v-for="(subject, index) in utmeSubjects" :key="index">
                                        <option v-if="subject.field === 'art/humanity'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                                <optgroup label="science">
                                    <span v-for="(subject, index) in utmeSubjects" :key="index">
                                        <option v-if="subject.field === 'science'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                                <optgroup label="commercial/social science">
                                    <span v-for="(subject, index) in utmeSubjects" :key="index">
                                        <option v-if="subject.field === 'commercial/social science'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                            </select>
                        </div>
                        <!-------------------------------------------------------------------------->
                        <div class="flex flex-col gap-2">
                            <!--3-->
                            <label for="utme-subject3">third subject:</label>
                            <select name="utme-subject3" id="utme-subject3" v-model="utmeSubject3.subject" class="border-2 border-black rounded-xl bg-gray-100 p-4">
                                <optgroup label="art/humanity">
                                    <span  v-for="(subject, index) in utmeSubjects" :key="index">
                                        <option v-if="subject.field === 'art/humanity'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                                <optgroup label="science">
                                    <span v-for="(subject, index) in utmeSubjects" :key="index">
                                        <option v-if="subject.field === 'science'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                                <optgroup label="commercial/social science">
                                    <span v-for="(subject, index) in utmeSubjects" :key="index">
                                        <option v-if="subject.field === 'commercial/social science'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                            </select>
                        </div>
                        <!-------------------------------------------------------------------------->
                        <div class="flex flex-col gap-2">
                            <!--4-->
                            <label for="utme-subject4">forth subject:</label>
                            <select name="utme-subject4" id="utme-subject4" v-model="utmeSubject4.subject" class="border-2 border-black rounded-xl bg-gray-100 p-4">
                                <optgroup label="art/humanity">
                                    <span  v-for="(subject, index) in utmeSubjects" :key="index">
                                        <option v-if="subject.field === 'art/humanity'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                                <optgroup label="science">
                                    <span v-for="(subject, index) in utmeSubjects" :key="index">
                                        <option v-if="subject.field === 'science'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                                <optgroup label="commercial/social science">
                                    <span v-for="(subject, index) in utmeSubjects" :key="index">
                                        <option v-if="subject.field === 'commercial/social science'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div class="flex flex-col gap-6 justify-between">
                        <div class="flex flex-col justify-center">
                            <label for="utme-subject1-score">score 1:</label>
                            <input type="number" name="utme-subject1-score" v-model="utmeSubject1.score" id="utme-subject1-score" max="400" class="border-2 border-black rounded-xl bg-gray-100 p-4">
                        </div>
                        <div class="flex flex-col justify-center">
                            <label for="utme-subject2-score">score 2:</label>
                            <input type="number" name="utme-subject2-score" v-model="utmeSubject2.score" id="utme-subject2-score" max="400" class="border-2 border-black rounded-xl bg-gray-100 p-4">
                        </div>
                        <div class="flex flex-col justify-center">
                            <label for="utme-subject3-score">score 3:</label>
                            <input type="number" name="utme-subject3-score" v-model="utmeSubject3.score" id="utme-subject3-score" max="400" class="border-2 border-black rounded-xl bg-gray-100 p-4">
                        </div>
                        <div class="flex flex-col justify-center">
                            <label for="utme-subject4-score">score 4:</label>
                            <input type="number" name="utme-subject4-score" v-model="utmeSubject4.score" id="utme-subject4-score" max="400" class="border-2 border-black rounded-xl bg-gray-100 p-4">
                        </div>
                    </div>
                </div>
            </div>
<!--############# O'level Result #################-->
            <legend class="my-5 font-bold">O'level result</legend>
            <div class="bg-gray-200 p-4 rounded-2xl drop-shadow-lg">
                <div class="w-full flex items-baseline gap-2">
                    <label for="exam-reg-number" class="font-bold">Examination Registration Number: </label>
                    <input type="text" name="exam-reg-number" v-model="olevelRegNum" class="w-90 border-2 border-black rounded-xl bg-gray-100 p-2">
                </div>
                <div class="py-6 flex items-baseline gap-2">
                    <label for="exam-type">Select Exam Type:</label>
                    <select name="exam-type" id="" v-model="examType" class="w-fit border-2 border-black rounded-xl bg-gray-100 p-2">
                        <option value="wassce">WASSCE</option>
                        <option value="neco">NECO</option>
                        <option value="nabteb">NABTEB</option>
                    </select>
                </div>
                <div class="flex gap-4">
                    <div class="flex flex-col gap-6">
                        <div class="flex flex-col gap-2">
                            <!--1-->
                            <label for="subject1">first subject:</label>
                            <select name="subject1" id="subject1" v-model="subject1.subject" class="border-2 border-black rounded-xl bg-gray-100 p-4">
                                <optgroup label="compulsory">
                                    <span  v-for="(subject, index) in olevelSubjects" :key="index">
                                        <option v-if="subject.field === 'compulsory'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                                <optgroup label="art/humanity">
                                    <span  v-for="(subject, index) in olevelSubjects" :key="index">
                                        <option v-if="subject.field === 'art/humanity'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                                <optgroup label="science">
                                    <span v-for="(subject, index) in olevelSubjects" :key="index">
                                        <option v-if="subject.field === 'science'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                                <optgroup label="commercial/social science">
                                    <span v-for="(subject, index) in olevelSubjects" :key="index">
                                        <option v-if="subject.field === 'commercial/social science'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                            </select>
                        </div>
                        <!------------------------------------------------------------------------->                     
                        <div class="flex flex-col gap-2">
                            <!--2-->
                            <label for="subject2">second subject:</label>
                            <select name="subject2" id="subject2" v-model="subject2.subject" class="border-2 border-black rounded-xl bg-gray-100 p-4">
                                <optgroup label="compulsory">
                                    <span  v-for="(subject, index) in olevelSubjects" :key="index">
                                        <option v-if="subject.field === 'compulsory'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                                <optgroup label="art/humanity">
                                    <span  v-for="(subject, index) in olevelSubjects" :key="index">
                                        <option v-if="subject.field === 'art/humanity'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                                <optgroup label="science">
                                    <span v-for="(subject, index) in olevelSubjects" :key="index">
                                        <option v-if="subject.field === 'science'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                                <optgroup label="commercial/social science">
                                    <span v-for="(subject, index) in olevelSubjects" :key="index">
                                        <option v-if="subject.field === 'commercial/social science'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                            </select>
                        </div>
                        <!------------------------------------------------------------------------->
                        <div class="flex flex-col gap-2">
                            <!--3-->
                            <label for="subject3">third subject:</label>
                            <select name="subject3" id="subject3" v-model="subject3.subject" class="border-2 border-black rounded-xl bg-gray-100 p-4">
                                <optgroup label="compulsory">
                                    <span  v-for="(subject, index) in olevelSubjects" :key="index">
                                        <option v-if="subject.field === 'compulsory'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                                <optgroup label="art/humanity">
                                    <span  v-for="(subject, index) in olevelSubjects" :key="index">
                                        <option v-if="subject.field === 'art/humanity'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                                <optgroup label="science">
                                    <span v-for="(subject, index) in olevelSubjects" :key="index">
                                        <option v-if="subject.field === 'science'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                                <optgroup label="commercial/social science">
                                    <span v-for="(subject, index) in olevelSubjects" :key="index">
                                        <option v-if="subject.field === 'commercial/social science'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                            </select>
                        </div>
                        <!------------------------------------------------------------------------->
                        <div class="flex flex-col gap-2">
                            <!--4-->
                            <label for="subject4">forth subject:</label>
                            <select name="subject4" id="subject4" v-model="subject4.subject" class="border-2 border-black rounded-xl bg-gray-100 p-4">
                                <optgroup label="compulsory">
                                    <span  v-for="(subject, index) in olevelSubjects" :key="index">
                                        <option v-if="subject.field === 'compulsory'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                                <optgroup label="art/humanity">
                                    <span  v-for="(subject, index) in olevelSubjects" :key="index">
                                        <option v-if="subject.field === 'art/humanity'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                                <optgroup label="science">
                                    <span v-for="(subject, index) in olevelSubjects" :key="index">
                                        <option v-if="subject.field === 'science'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                                <optgroup label="commercial/social science">
                                    <span v-for="(subject, index) in olevelSubjects" :key="index">
                                        <option v-if="subject.field === 'commercial/social science'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                            </select>
                        </div>
                        <!------------------------------------------------------------------------->
                        <div class="flex flex-col gap-2">
                            <!--5-->
                            <label for="subject5">fifth subject:</label>
                            <select name="subject5" id="subject5" v-model="subject5.subject" class="border-2 border-black rounded-xl bg-gray-100 p-4">
                                <optgroup label="compulsory">
                                    <span  v-for="(subject, index) in olevelSubjects" :key="index">
                                        <option v-if="subject.field === 'compulsory'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                                <optgroup label="art/humanity">
                                    <span  v-for="(subject, index) in olevelSubjects" :key="index">
                                        <option v-if="subject.field === 'art/humanity'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                                <optgroup label="science">
                                    <span v-for="(subject, index) in olevelSubjects" :key="index">
                                        <option v-if="subject.field === 'science'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                                <optgroup label="commercial/social science">
                                    <span v-for="(subject, index) in olevelSubjects" :key="index">
                                        <option v-if="subject.field === 'commercial/social science'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                            </select>
                        </div>
                        <!------------------------------------------------------------------------->
                        <div class="flex flex-col gap-2">
                            <!--6-->
                            <label for="subject6">sixth subject:</label>
                            <select name="subject6" id="subject6" v-model="subject6.subject" class="border-2 border-black rounded-xl bg-gray-100 p-4">
                                <optgroup label="compulsory">
                                    <span  v-for="(subject, index) in olevelSubjects" :key="index">
                                        <option v-if="subject.field === 'compulsory'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                                <optgroup label="art/humanity">
                                    <span  v-for="(subject, index) in olevelSubjects" :key="index">
                                        <option v-if="subject.field === 'art/humanity'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                                <optgroup label="science">
                                    <span v-for="(subject, index) in olevelSubjects" :key="index">
                                        <option v-if="subject.field === 'science'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                                <optgroup label="commercial/social science">
                                    <span v-for="(subject, index) in olevelSubjects" :key="index">
                                        <option v-if="subject.field === 'commercial/social science'" :value="subject.value">{{ subject.name }}</option>
                                    </span>
                                </optgroup>
                            </select>
                        </div>
                        <!------------------------------------------------------------------------->
                    </div>
                    <div class="flex flex-col gap-6 justify-between">
                        <div class="flex flex-col justify-center">
                            <label for="subject1-score">score 1:</label>
                            <input type="number" name="subject1-score" v-model="subject1.score" id="subject1-score" max="400" class="border-2 border-black rounded-xl bg-gray-100 p-4">
                        </div>
                        <div class="flex flex-col justify-center">
                            <label for="subject2-score">score 2:</label>
                            <input type="number" name="subject2-score" v-model="subject2.score" id="subject2-score" max="400" class="border-2 border-black rounded-xl bg-gray-100 p-4">
                        </div>
                        <div class="flex flex-col justify-center">
                            <label for="subject3-score">score 3:</label>
                            <input type="number" name="subject3-score" v-model="subject3.score" id="subject3-score" max="400" class="border-2 border-black rounded-xl bg-gray-100 p-4">
                        </div>
                        <div class="flex flex-col justify-center">
                            <label for="subject4-score">score 4:</label>
                            <input type="number" name="subject4-score" v-model="subject4.score" id="subject4-score" max="400" class="border-2 border-black rounded-xl bg-gray-100 p-4">
                        </div>
                        <div class="flex flex-col justify-center">
                            <label for="subject5-score">score 5:</label>
                            <input type="number" name="subject5-score" v-model="subject5.score" id="subject5-score" max="400" class="border-2 border-black rounded-xl bg-gray-100 p-4">
                        </div>
                        <div class="flex flex-col justify-center">
                            <label for="subject6-score">score 6:</label>
                            <input type="number" name="subject6-score" v-model="subject6.score" id="subject6-score" max="400" class="border-2 border-black rounded-xl bg-gray-100 p-4">
                        </div>
                    </div>
                </div>
            </div>
            <button type="submit" class="w-full my-5 px-5 py-3 rounded-lg bg-green-900 text-white">Apply</button>
        </form>
    </main>
</template>
<script setup>

useHead({
    title: 'Application',
});

const submitApplication = () => {}

//UTME EXAM
const utmeRegNum = ref(null)
const utmeSubject1 = ref({subject: null, score:null})
const utmeSubject2 = ref({subject: null, score:null})
const utmeSubject3 = ref({subject: null, score:null})
const utmeSubject4 = ref({subject: null, score:null})

//O'level EXAM
const olevelRegNum = ref(null)
const examType = ref(null)
const subject1 = ref({subject: null, score:null})
const subject2 = ref({subject: null, score:null})
const subject3 = ref({subject: null, score:null})
const subject4 = ref({subject: null, score:null})
const subject5 = ref({subject: null, score:null})
const subject6 = ref({subject: null, score:null})

const utmeSubjects = [
    {name: 'Use of English', value:'use-of-english', field:'compulsory'}, 

    {name: '-----', value:null, field:'art/humanity'}, 
    {name: 'Arabic', value:'arabic', field:'art/humanity'}, 
    {name: 'Christian Religious Knowledge', value:'CRK', field:'art/humanity'}, 
    {name: 'Fine Arts/Visual Arts', value:'fine-visual-art', field:'art/humanity'}, 
    {name: 'French', value:'french', field:'art/humanity'}, 
    {name: 'Government', value:'governmrnt', field:'art/humanity'}, 
    {name: 'Hausa', value:'hausa', field:'art/humanity'}, 
    {name: 'Igbo', value:'igbo', field:'art/humanity'}, 
    {name: 'History', value:'history', field:'art/humanity'},
    {name: 'Islamic Religious Knowledge', value:'irs', field:'art/humanity'},
    {name: 'Literature in English', value:'literature-english', field:'art/humanity'},
    {name: 'Music', value:'music', field:'art/humanity'},
    {name: 'Yoruba', value:'yoruba', field:'art/humanity'},

    {name: '-----', value:null, field:'science'},
    {name: 'Agricultural Science', value:'agric-science', field:'science'},
    {name: 'Biology', value:'biology', field:'science'},
    {name: 'Chemistry', value:'chemistry', field:'science'},
    {name: 'Computer Science', value:'computer-science', field:'science'},
    {name: 'Further Mathematics', value:'futher-math', field:'science'},
    {name: 'Geography', value:'geography', field:'science'},
    {name: 'Mathematics', value:'mathematics', field:'science'},
    {name: 'Physics', value:'physics', field:'science'},
    {name: 'Physical Education', value:'physical-edu', field:'science'},

    {name: '-----', value:null, field:'commercial/social science'},
    {name: 'Statistics', value:'statistics', field:'commercial/social science'},
    {name: 'Social Studies', value:'social-studies', field:'commercial/social science'},
    {name: 'Office Practice', value:'office-practice', field:'commercial/social science'},
    {name: 'Marketing', value:'marketing', field:'commercial/social science'},
    {name: 'Insurance', value:'insurance', field:'commercial/social science'},
    {name: 'Economics', value:'economics', field:'commercial/social science'},
    {name: 'Commerce', value:'commerce', field:'commercial/social science'},
    {name: 'Civic Education', value:'civic', field:'commercial/social science'},
    {name: 'Business Methods/Management', value:'business-meth/manage.', field:'commercial/social science'},
    {name: 'Book Keeping', value:'book-keeping', field:'commercial/social science'},
    {name: 'Accounting/Principles of Accounts', value:'accounting', field:'commercial/social science'},
    ]

const olevelSubjects = [
    {name: '-----', value:null, field:'compulsory'}, 
    {name: 'English Language', value:'english', field:'compulsory'},
    {name: 'Mathematics', value:'mathematics', field:'compulsory'},

    {name: '-----', value:null, field:'art/humanity'}, 
    {name: 'Arabic', value:'arabic', field:'art/humanity'}, 
    {name: 'Christian Religious Knowledge', value:'CRK', field:'art/humanity'}, 
    {name: 'Fine Arts/Visual Arts', value:'fine-visual-art', field:'art/humanity'}, 
    {name: 'French', value:'french', field:'art/humanity'}, 
    {name: 'Government', value:'governmrnt', field:'art/humanity'}, 
    {name: 'Hausa', value:'hausa', field:'art/humanity'}, 
    {name: 'Igbo', value:'igbo', field:'art/humanity'}, 
    {name: 'History', value:'history', field:'art/humanity'},
    {name: 'Islamic Religious Knowledge', value:'irs', field:'art/humanity'},
    {name: 'Literature in English', value:'literature-english', field:'art/humanity'},
    {name: 'Music', value:'music', field:'art/humanity'},
    {name: 'Yoruba', value:'yoruba', field:'art/humanity'},

    {name: '-----', value:null, field:'science'},
    {name: 'Agricultural Science', value:'agric-science', field:'science'},
    {name: 'Biology', value:'biology', field:'science'},
    {name: 'Chemistry', value:'chemistry', field:'science'},
    {name: 'Computer Science', value:'computer-science', field:'science'},
    {name: 'Further Mathematics', value:'futher-math', field:'science'},
    {name: 'Geography', value:'geography', field:'science'},
    {name: 'Physics', value:'physics', field:'science'},
    {name: 'Physical Education', value:'physical-edu', field:'science'},

    {name: '-----', value:null, field:'commercial/social science'},
    {name: 'Statistics', value:'statistics', field:'commercial/social science'},
    {name: 'Social Studies', value:'social-studies', field:'commercial/social science'},
    {name: 'Office Practice', value:'office-practice', field:'commercial/social science'},
    {name: 'Marketing', value:'marketing', field:'commercial/social science'},
    {name: 'Insurance', value:'insurance', field:'commercial/social science'},
    {name: 'Economics', value:'economics', field:'commercial/social science'},
    {name: 'Commerce', value:'commerce', field:'commercial/social science'},
    {name: 'Civic Education', value:'civic', field:'commercial/social science'},
    {name: 'Business Methods/Management', value:'business-meth/manage.', field:'commercial/social science'},
    {name: 'Book Keeping', value:'book-keeping', field:'commercial/social science'},
    {name: 'Accounting/Principles of Accounts', value:'accounting', field:'commercial/social science'},
    ]
</script>