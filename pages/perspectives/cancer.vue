<template>
  <div>
    <header>
      <Title :title="title" />
    </header>

    <div class="max-w-[680px] mx-auto w-auto lg:w-[680px]">
      <h1 class="text-2xl text-blue-800 font-bold text-center py-4">
        My Cancer Journey (2022)
      </h1>

      <!-- <i class="text-slate-600 ml-2">
        Hint: Click on the arrow buttons to expand and collapse the tabs~
      </i> -->

      <ClickableTabVue :open="true">
        <template #title> &#10071; Disclaimer &#10071; </template>
        <template #content>
          1 in 4 people in Singapore will be diagnosed with cancer some time in
          their lives. Odds are, you know someone who has cancer, has had
          cancer, or will have cancer in the future. I didn't realise it back
          then, but this is the reality we live in -- one where our lives can
          change <i>very</i> drastically within a <i>very</i> short time.<br /><br />

          I hope that before you read through my journey, you can understand
          that
          <u>cancer affects each person differently</u>, and in this webpage,
          I'm only speaking from my experience as a Stage 2 Hodgkin's Lymphoma
          patient. So yeah... I was actually lucky in the sense that I was
          diagnosed early, that it is a treatable cancer, that my body responded
          well to the treatment, and that the treatment I received was good.
          I've heard of many stories of people who went/were going through a
          much rougher time, so I really feel for them.<br /><br />

          I'm hoping that maybe through my sharing, I'll be able to cast more
          light on this very real disease. (It's also for myself to archive my
          experiences too!) Hopefully I've made it readable and fun to read
          through :)
        </template>
      </ClickableTabVue>

      <ClickableTabVue>
        <template #title> What went Down </template>
        <template #content>
          In February of 2022, I noticed a few lumps forming on my left shoulder
          and neck. To my alarm, in just a week's time, the growths had spread
          rapidly over a larger area, and also felt hard to the touch. &#129300;
          <br /><br />
          I went to a GP (after my last Midterm examination in school) and
          thankfully, he immediately referred me to SGH's A&E. After some tests,
          I was told I had to be warded at the hospital to conduct further
          investigations. I still remember having to stay up till
          <b>1am</b> before I was even given a bed &#128549;, probably due to
          the high number of Covid patients requiring beds too. <br /><br />
          Anywho, I was warded for a couple of days, during which 3 crucial
          things ocurred:
          <ol class="list-decimal ml-4">
            <li class="py-3">
              I had to go through a <u>biopsy</u> &#128549; (which is a surgical
              procedure to extract a sample of the tissue from my shoulder, so
              that tests can be run to determine the nature of my illness)<br />
              <i
                >Spoiler: The procedure hurt like heck!! Even under local
                anaesthesia!</i
              >
            </li>
            <li class="py-3">
              I was given my fateful
              <a
                href="https://www.singhealth.com.sg/patient-care/conditions-treatments/lymphoma"
                target="_blank"
                class="underline"
              >
                diagnosis
              </a>
              &#129319;. It was a bit of a shock back then.
            </li>
            <li class="py-3">
              I had a <u>tube</u> stuck into my chest &#128576;. <br />
              This tube can deliver fluids into a larger vein compared to using
              a standard IV line. It can be used to administer chemotherapy
              drugs, and to easily get blood samples.<br /><br />
              <img
                class="max-w-[300px] md:max-w-[400px] mx-auto"
                src="~/assets/images/cancer/cvc_line.jpg"
                alt="cvc line"
              /><br />
              Thankfully, the procedure for this was painless &#128519;.
            </li>
          </ol>
          <br />

          So as you can tell, hospital stay was a bit taxing and I was glad I
          was finally out after
          <b>1 week</b>.<br /><br />

          <i>Another week later...</i><br /><br />

          <img
            class="max-w-[300px] md:max-w-[400px] mx-auto"
            src="~/assets/images/cancer/nccs.jpg"
            alt="nccs"
          /><br />

          My actual treatment finally started for real. Soon, I started seeing
          this building (National Cancer Centre) really often -- going there for
          <b>chemotherapy</b>, <b>blood tests</b>, <b>scans</b>, and
          <b>doctor consultations</b>.
          <i
            >(Unrelated, but right now NCCS has transferred to a new building
            that looks pretty sleek haha)</i
          >
          <br /><br />

          For those unfamiliar, chemotherapy involves using anti-cancer drugs to
          kill cancer cells. It stops cancer cells from growing and reproducing
          themselves. It is commonly given in cycles, with each cycle consisting
          of a treatment period followed by a recovery period.
          <br /><i
            >(Info lifted from
            <a
              href="https://www.nccs.com.sg/patient-care/cancer-types/pages/cancer-treatment.aspx"
              class="text-red-700"
              target="_blank "
              >NCCS's website</a
            >
            . Do check it out for more useful info :) )</i
          >
          <br /><br />

          For my case, I was given 4 cycles of chemotherapy, each cycle lasting
          4 weeks. So a total of 4 months.<br />
          So it goes like:<br />
          <b>Week 1</b>: chemotherapy<br />
          <b>Week 2</b>: recovery + blood test<br />
          <b>Week 3</b>: chemotherapy<br />
          <b>Week 4</b>: recovery + blood test + doctor consultation<br /><br />

          Overall, it was quite a smooth and streamlined process. Thanks to the
          CVC line (the tube stuck into my chest), I didn't have to go through
          the pain of getting an IV line inserted into my arm every other week.
          However, the CVC line eventually slipped further out of my chest to a
          worrying degree... so I had to get it removed
          <u>before my last treatment</u>. That meant using an IV line for my
          last treatment. Nevertheless, that one time gave me perspective:
          <br /><br />
          <div class="bg-orange-100">
            On one hand, I was actually getting real tired of the CVC line.
            <ul class="list-disc ml-[3ch]">
              <li>
                The dressing for the CVC line needed to be changed every week
                (done by nurses) The process took anywhere between 20 minutes to
                around 40 minutes.
              </li>
              <li>
                I had to make sure the dressing was kept clean. That also meant
                taping the area around the dressing to prevent it from getting
                wet when I showered.
              </li>
              <li>
                But I guess the most annoying thing was that it was on me 24/7.
                I mean.. it wasn't particularly uncomfortable or anything, but
                having something artificial sticking out of your chest is
                just... weird.
              </li>
            </ul>
          </div>
          <br />
          <div class="bg-purple-100">
            But on the other hand, IV lines suck... They're painful, and I also
            get a bruise around the area for days even after the line is
            removed.
          </div>
          <br />
          Well.. personally, I feel that the CVC line is still the lesser of 2
          evils, so I'm thankful I had it for 7 chemo sessions.
          <br />
          <br />
          But other than that, there were of course numerous side effects from
          the drugs, which I will talk about later.<br /><br />

          <i>Moving on with the story...</i><br /><br />

          <b>4 months and 8 chemo sessions later~~</b><br />
          Chemotherapy DONE!<br />
          Now for Radiotherapy!<br /><br />

          <b>Radiotherapy</b><br />
          Now this one was interesting...<br />
          Take a look at this image:<br />
          <img
            v-if="noLabel"
            class="max-w-[300px] md:max-w-[400px] mx-auto"
            src="~/assets/images/cancer/radiotherapy.jpg"
            alt="radiotherapy"
            @click="label"
          />
          <img
            v-else
            class="max-w-[300px] md:max-w-[400px] mx-auto"
            src="~/assets/images/cancer/radiotherapy_with_label.jpg"
            alt="radiotherapy"
            @click="label"
          />
          Basically, radiation is a more targetted approach to wipe out the
          tumor, compared to chemo which affects the whole body. If you
          <b>click</b> on the image, you can see that the person is wearing a
          mask, which is to keep his head still during the procedure. It's a
          plastic mould with holes to breathe through. It had to be custom-made
          for me, so a technician would heat up a plastic sheet and mould it to
          my face. Thanks to the mould, I couldn't really see much of anything
          during the procedure &#128517; <br /><br />

          Fun(?) fact: I also had to be tattooed on my torso (just 4 small dots)
          to help the radiographers align the machine properly.
          <br /><br />

          This procedure was done roughly 5 times a week for 3 weeks. Each
          session lasted for a maximum of 15 minutes if I remember correctly.
          One 'major' side effect was having a <b>very</b>, <b>very</b> dry
          throat for 1.5 months. It was like being in a desert, or being in a
          very cold place with dry air... &#128548; To add on, thick phelgm was
          constantly building up, and it was <b>very</b> hard to get it out of
          my throat due to the lack of saliva production... &#128529; Well, it
          was a bit of a pain, but at least the medicine the pharmacy provided
          helped a bit. <br /><br />

          <i>Oh yes</i>, a weird thing I noticed was that my facial hair stopped
          growing on the left side of my face. The left side is where the tumor
          on my shoulder was being targetted for radiation. LOL I felt a bit
          like Two-Face for a while. <br /><br />

          ... <br />
          ... <br />
          ... <br />

          <i>And WELLLLLL, eventually, the radiotherapy came to an end~~~</i
          ><br />
          I was so glad it was all over. I believe the whole journey (from
          mid-Feb to mid-Aug) took about 6 months. Half a year! It lasted for
          half of a Uni semester, a whole summer break, and 2.5 weeks of the
          next Semester.
          <b>Wow</b> <br /><br />

          In the next section, I will go into more detail for some of the stuff
          I glossed over in this section.
        </template>
      </ClickableTabVue>

      <ClickableTabVue>
        <template #title>Struggles during Chemo</template>
        <template #content>
          <h2 class="font-bold underline">Physical</h2>
          <ol class="list-decimal list-inside marker:font-bold">
            <li>
              <b>Hair loss</b> - This kicked in only after ~2 months into chemo.
            </li>
            <li><b>Less appetite</b> (lasts for 3-4 days after chemo)</li>
            <li><b>Insomnia</b> (lasts for 1-2 days after chemo)</li>
            <li><b>Weight gain</b></li>
            <li><b>Fatigue</b></li>
          </ol>
          <p>
            This list could be longer but I'm glad it's as short as it is.
            Before I had started my first chemo, my doctor had pre-empted me of
            all the possible side effects and risks. That list was loooooong.
            <br /><br />

            <img
              class="float-right w-[30%] pl-2"
              src="~/assets/images/cancer/open_grassland.jpg"
            />
            <b>1.</b> How would you expect my hair to drop? I first expected it
            to fall out in clumps, but it turned out to be more like your
            everyday hair loss, only that the rate of hair dropping was much
            higher. It resulted in my scalp having a sparse amount of hair, like
            an open grassland with only little vegetation... Needless to say, I
            wouldn't be caught in public without my cap on back then &#128517;
            (Also, at it's worst, the toilet drain got clogged up within 3 days)
            <br /><br />

            <b>2.</b> Having less appetite caused trouble for my caregiver. It
            was rougher at the start, because no one knew how much food to
            prepare. <br /><br />

            <b>3.</b> The so-called insomnia I experienced was sporadic at
            times: some nights I would be unable to sleep till around 5am, while
            on other nights I would fall asleep at a decent time of 1am. It was
            probably worsened due to stress from school, and my already
            <i>crappy</i> sleep schedule (which I should really fix). On those
            bad nights, thoughts would keep popping into my head one after
            another. I would sometimes try to quell them by penning those
            thoughts down, or just try to read books (most of the time, just
            manga) to distract myself. Can't say I found a way to effectively
            block out those thoughts in the end. &#128529; <br /><br />

            <b>4.</b> I gained around 5kg. It was the heaviest I've ever been,
            and hopefully, will ever be for the rest of my life. <br /><br />

            <b>5.</b> I was even more low-energy than usual... I can't really
            quantify it so there's not much to say here.
          </p>
          <br /><br />

          <h2 class="font-bold underline">Mental and Emotional</h2>
          <p>
            I have to admit that I felt really down at times.<br /><br />

            I had to essentially quarantine myself at home for
            <b>5 months</b> -- not going out of the house except for my
            treatment to reduce interaction with others. My parents and I felt
            that this was a necessity, since chemotherapy weakens my immune
            system and would make me more susceptibile to other illnesses. My
            doctor had also mentioned that my treatment may have to be delayed
            if I got Covid (and I did NOT want that to happen, as I had to also
            worry about whether to return back to school later in August).<br /><br />

            BUT even though I took precautions, I somehow still got Covid
            halfway through my journey. I had to be hospitalised AGAIN. For 5
            days. Yes, that sucked, but at that point in time, it was all right
            as it was a change of pace (as weird as that sounds), because I was
            actually facing interpersonal issues at home too &#128556;. Anyway,
            I eventually recovered, things calmed down, and everything went back
            to "normal".<br /><br />

            However, "normal" was me being alone in my room whilst the Summer
            holidays went on. Of course, I would love to be able go out and have
            fun, but I reminded myself that I was fighting a long, drawn-out war
            and I have to pull through this unpleasant time.
          </p>
          <br /><br />

          <h2 class="font-bold underline">Spiritual</h2>
          <p>
            It's tough to admit but I was down in my spiritual life too. I did
            not have established habits of prayer and Bible reading yet, as I
            was a relatively new Christian. That said, I did involve myself in
            CG (Connect Group) meetings and watched the weekly online sermons
            (grateful for this!). I also finished a book called "Driven by
            Eternity" by John Bevere.
          </p>
        </template>
      </ClickableTabVue>

      <ClickableTabVue>
        <template #title>Acknowledgements</template>
        <template #content>
          I'm not someone who expresses his gratitude nearly enough, but I'm
          really thankful for everyone who has helped me at any point through my
          journey.

          <ul class="list-disc list-inside">
            <li class="py-[4px]">
              <b>Doctors and Nurses</b>
              <p class="pl-[2.7ch]">
                I cannot understate how much of a role the nurses played in my
                treatment, as they helped to change the dressing of my CVC line
                every week and also helped administer chemotheraphy. They are
                MVPs :) Meanwhile, my doctor kept things real with me, gave me a
                clear picture of my situation at every step of the way, and was
                also really encouraging.
              </p>
            </li>
            <li>
              <b>Family and Relatives</b>
              <p class="pl-[2.7ch]">
                I've not mentioned it before, but throughout my treatment, I was
                staying at my aunt's place. This was because my house was quite
                cluttered and a bit unhygienic - not the most conducive
                environment for recovery. So my aunt was essentially my
                caregiver for the 6 months. Thankful to her for offering to take
                care of me throughout this down period. Meanwhile, my dad would
                bring me to and from the cancer center for the various checkups,
                chemo, and radiotheraphy sessions. Luckily, his boss is
                supportive and understanding enough to cut him some slack when
                he has to take some time off work during working hours &#129303;
                My mum was busy running the house, making sure things don't fall
                apart as usual.
              </p>
            </li>
            <li>
              <b>Friends </b>
              <p class="pl-[2.7ch]">
                I actually didn't tell many people about my cancer diagnosis...
                even after it had ended... Oops. (I guess it's just not the
                easiest thing to share/broadcast.) But I'm glad that the people
                I've told were really supportive and understanding. Some sent me
                a whole-ass hamper, which I have yet to open (oops). And my
                church friends also kept me in touch with church, prayed for me,
                and celebrated my recovery with me. &#128522; Very blessed to be
                planted in church, and being part of a community that cares for
                me. They made it a point to listen to some sermons together with
                me, and one verse that kept me going was:
              </p>
              <div
                class="ml-[2.7ch] pl-[2.7ch] border-l-[6px] border-slate-600 inline-block my-[1ch]"
              >
                <i
                  >"Yea, though I walk
                  <b>through the valley of the shadow of death</b>, I will fear
                  no evil; For You are with me; Your rod and Your staff, they
                  comfort me."</i
                ><br />
                <div class="float-right">Psalms 23:4 NKJV</div>
              </div>
              <p class="pl-[2.7ch]">
                It also warms my heart when I think about how they celebrated my
                return when I could finally come back for in-person services.
                &#128522;
              </p>
            </li>
            <li>
              <b>School mates</b>
              <p class="pl-[2.7ch]">
                Thankful to my school mates for honestly, helping to keep my CAP
                afloat. I was unable to contribute much for 2 major projects but
                they were understanding enough to help cover for me. Although it
                didn't feel great to be a freeloader, I'm glad that at the end
                of the day, the projects did very well (I think) &#128170;
              </p>
            </li>
          </ul>
        </template>
      </ClickableTabVue>

      <ClickableTabVue>
        <template #title>Others</template>
        <template #content>
          One thing that irked me was how little the school offered to help me
          during this period. I expected there to be protocols and support for
          this kind of stuff but apparently there was not (or I wasn't made
          aware of them). I had to initiate and ask my course coordinator about
          the options I have through email. The options that I was given were
          were to either take a Leave of Absence
          <i>
            (which meant forfeiting the first half of the semester I had already
            worked hard for)
          </i>
          OR continue with the semester. If I continued, I could apply for
          Special Consideration for my Final exams
          <i>
            (aka the final grade for my module would not take into account the
            Final exam)
          </i>
          . What kind of options are these??? &#128548;&#128548;&#128548; Of
          course I would choose to continue with the semester and NOT apply for
          Special Consideration. It's not like I was totally unable to study
          after all. Literally, all I could do was to trust that my profs were
          understanding enough to cut me some slack... To their credit, they
          were. Or at least I think they were. Well, I only had emails to base
          my judgement on. &#128552; Sigh... it was a very confusing and
          fustrating period of time, but I'm thankful that it all turned out
          fine in the end... Like I could take my final exam at home (special
          arrangement from my prof). Luckily, I was also not mentally affected
          too much by the whole ordeal, and could still study for my exams.
          Looking back, it's pretty awesome how I didn't need to delay my
          graduation by a semester.
          <br /><br />

          Anyways, after returning to my own home, one thing I realised was that
          I wanted to help out more. Being purely a receiver of help is not a
          good thing, and I wanted to help out with at least washing the dishes.
          I think this point is very important for any caregiver -- to let your
          patient help out in any way possible, so that he/she would not feel
          like a burden. But what about patients who are really unable to
          contribute much? I've read this very impactful book called
          <b>"Courage for Caregivers"</b>
          by Henri Nouwen, and one thing that really stood out to me was that
          some caregivers, while taking care of their terminally ill patient, do
          feel like they learn so much from the patient. I think it was about
          learning forgiveness, love, and the human condition. I can't remember
          exactly how the author phrased that point, but it was so powerful.
          Well, I don't know what compelled me to read the book, because it is
          more targeted at caregivers, but I think it's a good read for anyone
          who wants to understand the caregiver's perspective.
          <br /><br />

          On another note, my senior pastor unveiled some resources to help
          people going through tough ordeals like cancer. She had gone through
          Stage 3 Breast Cancer and celebrated her 10th year being cancer-free
          in 2022! Visit this
          <a
            class="border-2 hover:border-slate-600 border-slate-600 hover:bg-slate-600 hover:text-white rounded-md px-[2px] py-[1px]"
            href="https://pastorlia.com/music/not-afraid/"
            target="_blank"
            >website</a
          >
          if you're interested. She posted things that had helped her through
          her journey, and tried to give a balanced view on her whole journey. I
          think it would inspire you to see how she had kept her faith and
          spirits so strong despite her condition. For myself, she had
          personally prayed for me before I went for my first chemo treatment
          &#128522;, and I believe that that prayer, together with many others,
          really helped me get through my cancer journey with minimal
          complications.
          <br /><br />
        </template>
      </ClickableTabVue>
    </div>
  </div>
</template>

<script>
// import DefaultTabVue from '~/components/DefaultTab.vue'
import ClickableTabVue from '~/components/ClickableTab.vue'
export default {
  name: 'CancerPage',
  components: {
    // DefaultTabVue,
    ClickableTabVue,
  },
  layout: 'dafault',
  data() {
    return {
      title: 'Cancer',
      hover: false,
      noLabel: true,
    }
  },
  methods: {
    label() {
      this.noLabel = !this.noLabel
    },
  },
}
</script>
