import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang = new BehaviorSubject<'geo' | 'en'>('geo');
  lang$ = this.currentLang.asObservable();

  translations = {
    en: {
      home: 'Home',
      contact: 'About Us',
      silabus: 'Syllabus',
      members: 'Members',
      welcome: 'Welcome to our site!',
      footer: 'Tbilisi Georgia, Village thkinvali',
      lorem: 'we are a team of dedicated professional, with  years of expirience in child development, we focus on creating presonalized programs, that support communication, emotional regulation and matches each childs unique needs and potential. we believe that every child learns best through play, music, art and physical therapy. our therapies are designed to: improve social and communication skills, support emotional and behavioral development, enhance focus and censory integration',
      responsible: 'what is this company responsible for?',
      depend: 'centre on which you can fully depend on',
      Tamuna: 'Tamuna Nadiradze',
      TaWork: 'Music therapist',
      OurStaf: 'Out staff',
      Phone: '+995 591 884 888',
      Email: 'tnadiradzebukia@gmail.com',
      Address: 'Tbilisi/village Thkinvali',
      Facebook: 'Facebook page: TCentre',
      inform: 'Contact information',
      mond: 'Monday',
      tues: 'Tuesday',
      wedn: 'Wednesday',
      thur: 'Thursday',
      frid: 'Friday',
      satu: 'Saturday',
      sund: 'Sunday',
      tableFirst: 'Greeting, morning circle',
      musicTh: 'music-therapy',
      artTh: 'art therapy',
      TaleTh: 'Tale therapy',
      RestingTime: 'Break',
      cullinary: 'cullinary',
      physwork: 'physicall workout',
       Nextpage: 'go to page',
      b1:'Occupational Therapy (OT): Focuses on daily living skills (dressing, eating, personal hygiene), fine and gross motor development.',
      b2:'Speech/Communication Therapy (SLP): Improving verbal and nonverbal communication, implementing alternative communication systems (AAC) (if necessary).',
      b3:'Physical therapy (PT): Improving range of motion, muscle strength, and balance.',
      b4:'Special pedagogy: Development of cognitive skills, preschool/school readiness, and academic skills.',
      b5:'Group social skills training: learning the rules of interacting with peers, keeping order, sharing, and resolving conflicts.',
      b6:'Behavior Management/Applied Behavior Analysis (ABA): Reducing challenging behaviors and building desired behaviors.',
      b7:'Psychological counseling: emotional regulation, increasing self-esteem.',
      b8:'Artistic and vocational circles (art therapy): development of creative skills and expression of emotions.',
      b9:'Sensory activities: Working with children with sensory integration disorders (in the sensory room).',
      b10:'Healthy Eating: Organized lunch/breakfast used to teach independent eating skills.',
      Did:'individual therapy',
      Gre:'time: with agreement',
      Smena1:'First part',
      Speech:'Speech',
      Contact:'Contact:',

    },
    geo: {
      home: 'მთავარი',
      contact: 'ჩვენ შესახებ',
      silabus: 'სილაბუსი',
      members: 'წევრები',
      welcome: 'მოგესალმებით ჩვენს საიტზე!',
      footer: 'თბილისი/საქართველო, სოფ. თხინვალი',
      lorem: 'ჩვენ ვართ ბავშვთა განვითარების სფეროში მრავალწლიანი გამოცდილების მქონე ერთგული პროფესიონალების გუნდი. ჩვენ ვამახვილებთ ყურადღებას პერსონალიზებული პროგრამების შექმნაზე, რომლებიც ხელს უწყობენ კომუნიკაციას, ემოციურ რეგულირებას და შეესაბამება თითოეული ბავშვის უნიკალურ საჭიროებებსა და პოტენციალს. ჩვენ გვჯერა, რომ ყველა ბავშვი საუკეთესოდ სწავლობს თამაშით, მუსიკით, ხელოვნებითა და ფიზიკური თერაპიის საშუალებით. ჩვენი თერაპიები მიზნად ისახავს: სოციალური და კომუნიკაციური უნარების გაუმჯობესებას, ემოციური და ქცევითი განვითარების მხარდაჭერას, ფოკუსირებისა და ცენზურის ინტეგრაციის გაუმჯობესებას.',
      responsible: 'რაზე არის ეს კომპანია პასუხისმგებელი?',
      depend: 'ცენტრი რომელსაც შეგიძლია ბოლომდე დაეყრდნო',
      Tamuna: 'თამუნა ნადირაძე',
      TaWork: 'მუსიკათერაპევტი',
      OurStaf: 'ჩვენი თერაპევტები',
      Phone: '+995 591 884 888',
      Email: 'tnadiradzebukia@gmail.com',
      Address: 'თბილისი/საქართველო სოფელი თხინვალი',
      Facebook: 'Facebook გვერდი: TCentre',
      inform: 'საკონტაქტო ინფორმაცია',
      mond: 'ორშაბათი',
      tues: 'სამშაბათი',
      wedn: 'ოთხშაბათი',
      thur: 'ხუთშაბათი',
      frid: 'პარასკევი',
      satu: 'შაბათი',
      sund: 'კვირა',
      tableFirst: 'მისალმება, დილის წრე',
      musicTh: 'მუსიკა-თერაპია',
      artTh: 'ხელოვნებით თერაპია',
      TaleTh: 'ზღაპარ-თერაპია',
      RestingTime: 'შესვენება',
      cullinary: 'კულინარია',
      physwork: 'ფიზ. ვარჯიშები',
      Nextpage: 'იხილეთ გვერდი',
      b1:'ოკუპაციური თერაპია (OT): ფოკუსირება ყოველდღიური ცხოვრების უნარებზე (ჩაცმა, ჭამა, პირადი ჰიგიენა), წვრილი და მსხვილი მოტორიკის განვითარება.',
      b2:'მეტყველების/კომუნიკაციის თერაპია (SLP): ვერბალური და არავერბალური კომუნიკაციის გაუმჯობესება, ალტერნატიული კომუნიკაციის სისტემების (AAC) დანერგვა (საჭიროების შემთხვევაში).',
      b3:'ფიზიკური თერაპია (PT): მოძრაობის დიაპაზონის გაუმჯობესება, კუნთების სიძლიერე და ბალანსი.',
      b4:'სპეციალური პედაგოგიკა: კოგნიტური უნარების, წინასასკოლო/სასკოლო მზაობისა და აკადემიური უნარების განვითარება.',
      b5:'ჯგუფური სოციალური უნარების ტრენინგები: თანატოლებთან ურთიერთობის წესების სწავლა, რიგის დაცვა, გაზიარება, კონფლიქტების მოგვარება.',
      b6:'ქცევის მართვა/გამოყენებითი ქცევითი ანალიზი (ABA): რთული ქცევების შემცირება და სასურველი ქცევების ჩამოყალიბება.',
      b7:'ფსიქოლოგიური კონსულტაცია: ემოციური რეგულაცია, თვითშეფასების ამაღლება.',
      b8:'მხატვრული და სახელობო წრეები (არტ-თერაპია): შემოქმედებითი უნარების განვითარება და ემოციების გამოხატვა.',
      b9:'სენსორული აქტივობები: მუშაობა სენსორული ინტეგრაციის დარღვევების მქონე ბავშვებთან (სენსორულ ოთახში).',
      b10:'ჯანსაღი კვება: ორგანიზებული სადილი/სამხარი, რომელიც გამოიყენება დამოუკიდებელი კვების უნარების შესასწავლად.',
      Did:'ინდივიდუალური თერაპია',
      Gre:'დრო: შეთანხმებით',
      Smena1:'პირველი სმენა',
      Speech:'მეტყველება',
      Contact:'კონტაქტი:',

    }
  };

  constructor() {
    // Remember previous language (optional)
    const savedLang = localStorage.getItem('lang') as 'en' | 'geo' | null;
    if (savedLang) this.currentLang.next(savedLang);
  }

  switchLang() {
    const newLang = this.currentLang.value === 'en' ? 'geo' : 'en';
    this.currentLang.next(newLang);
    localStorage.setItem('lang', newLang); // remember choice
  }

  getTranslations(lang: 'en' | 'geo') {
    return this.translations[lang];
  }
}
