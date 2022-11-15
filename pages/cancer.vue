<template>
  <div>
    <header>
      <Title :title="title" />
    </header>

    <div class="max-w-[680px] mx-auto">
      <h1 class="text-2xl text-blue-800 font-bold text-center py-4">
        My Cancer Journey
      </h1>

      <div class="m-2 border-4 p-4 rounded-lg">
        <h1 class="font-bold">Disclaimer</h1>
        <p>
          1 in 3 people in Singapore will be diagnosed with cancer some time in
          their lives. Odds are, you know someone who has cancer, has had
          cancer, or will have cancer in the future. I didn't realise it back
          then, but this is the reality we live in - one where our lives can
          change
          <i>very</i> drastically whithin a <i>very</i> short time.<br /><br />

          For me, even though I was diagnosed with cancer at a relatively young
          age (23yo), I'm thankful that it is a cancer that is very treatable.
          Others are not as lucky...<br /><br />

          I hope that when you read through my journey, you can understand that
          I'm only one person; that cancer affects each person differently and
          that I only speak from the experience of a particularly small group of
          cancer patients (Stage 2 Hodgkin's Lymphoma).
        </p>
      </div>

      <h1 class="m-2 font-bold border-4 p-4 rounded-lg hover:bg-orange-100">
        What went down
      </h1>

      <div class="m-2 border-4 p-4 rounded-lg">
        Early this February, I noticed a few lumps forming on my left shoulder
        and neck. To my alarm, in just a week's time, the growths had spread
        rapidly over a larger area, and also felt hard to the touch. &#129300;
        <br /><br />
        I went to a GP (after my last Midterm examination in school) and
        thankfully, he immediately referred me to SGH's A&E. After some tests, I
        was told I had to be warded at the hospital to conduct further
        investigations. I still remember having to stay up till
        <b>1am</b> before I was even given a bed &#128549;, probably due to the
        high number of Covid patients requiring beds too. <br /><br />
        Anywho, I was warded for a couple of days, during which 3 crucial things
        ocurred:
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
            This tube can deliver fluids into a larger vein compared to using a
            standard IV line. It can be used to administer chemotherapy drugs,
            and to easily get blood samples.<br /><br />
            <img
              class="max-w-[400px] mx-auto"
              src="~/assets/images/cancer/cvc_line.jpg"
              alt="cvc line"
            /><br />
            Thankfully, the procedure for this was painless &#128519;.
          </li>
        </ol>
        <br />

        So as you can tell, hospital stay was a bit taxing and I was glad I was
        finally out after
        <b>1 week</b>.<br /><br />

        <i>Another week later...</i><br /><br />
        My actual treatment finally started for real. Soon, I started seeing
        <b
          class="text-red-700"
          @mouseover="hover = true"
          @mouseleave="hover = false"
          >this building</b
        >
        (National Cancer Centre) really often -- going there for
        <b>chemotherapy</b>, <b>blood tests</b>, <b>scans</b>, and
        <b>doctor consultations</b>.

        <br /><br /><span v-if="hover"
          ><img
            class="max-w-[400px] mx-auto"
            src="~/assets/images/cancer/nccs.jpg"
            alt="nccs" /><br
        /></span>

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

        For my case, I was given 4 cycles of chemotherapy, each cycle lasting 4
        weeks.<br />
        So it goes like:<br />
        <b>Week 1</b>: chemotherapy<br />
        <b>Week 2</b>: recovery + blood test<br />
        <b>Week 3</b>: chemotherapy<br />
        <b>Week 4</b>: recovery + blood test + doctor consultation<br /><br />

        Overall, it was quite a smooth and streamlined process. Thanks to the
        CVC line (the tube stuck into my chest), I didn't have to go through the
        pain of getting an IV line inserted into my arm every other week.
        However, the CVC line eventually slipped further out of my chest to a
        worrying degree... so I had to get it removed
        <u>before my last treatment</u>. That meant using an IV line for my last
        treatment. Nevertheless, that one time gave me perspective: <br /><br />
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
              taping the area around the dressing to prevent it from getting wet
              when I showered.
            </li>
            <li>
              But I guess the most annoying thing was that it was on me 24/7. I
              mean.. it wasn't particularly uncomfortable or anything, but
              having something artificial sticking out of your chest is just...
              weird.
            </li>
          </ul>
        </div>
        <br />
        <div class="bg-purple-100">
          But on the other hand, IV lines suck... They're painful, and I also
          get a bruise around the area for days even after the line is removed.
        </div>
        <br />
        Well.. personally, I feel that the CVC line is still the lesser of 2
        evils, so I'm thankful I had it for 7 chemo sessions.
        <br />
        <br />
        But other than that, there were of course numerous side effects from the
        drugs, which I will talk about later.<br /><br />

        <i>Moving on with the story...</i><br /><br />

        <b>4 months and 8 chemo sessions later~~</b><br />
        Chemotherapy DONE!<br />
        Now for Radiotherapy!<br /><br />

        <b>Radiotherapy</b><br />
        Now this one was interesting...<br />
        Take a look at this image first:<br />
        <img
          v-if="noLabel"
          class="max-w-[400px] mx-auto"
          src="~/assets/images/cancer/radiotherapy.jpg"
          alt="radiotherapy"
          @click="label"
        />
        <img
          v-else
          class="max-w-[400px] mx-auto"
          src="~/assets/images/cancer/radiotherapy_with_label.jpg"
          alt="radiotherapy"
          @click="label"
        />
      </div>

      <h1 class="m-2 font-bold border-4 p-4 rounded-lg hover:bg-orange-100">
        Struggles
      </h1>
      <div class="m-2 border-4 p-4 rounded-lg">
        <h2 class="font-bold">Physical</h2>
        <ul class="list-disc list-inside">
          <li>Hair loss - This kicked in only after ~2 months into chemo.</li>
          <li>Less appetite (lasts for 3-4 days after chemo)</li>
          <li>Insomnia (lasts for 1-2 days after chemo)</li>
          <li>Weight gain</li>
          <li>Fatigue</li>
        </ul>
        <p>
          This list could be longer but I'm glad it's as short as it is. Before
          I had started my first chemo, my doctor had pre-empted me of all the
          possible side effects and the list was looooong.
        </p>
        <br /><br />

        <h2 class="font-bold">Mental and Emotional</h2>
        <p>
          I have to admit that I felt really down at times.<br /><br />

          I had to essentially quarantine myself at home for <b>5 months</b> --
          not going out of the house except for my treatment to reduce
          interaction with others. My parents and I felt that this was a
          necessity, since chemotherapy weakens my immune system and would make
          me more susceptibile to other illnesses. My doctor had also mentioned
          that my treatment may have to be delayed if I got Covid (and I did NOT
          want that to happen, as I had to also worry about whether to return
          back to school later in August).<br /><br />

          BUT even though I took precautions, I somehow still got Covid halfway
          through my journey. I had to be hospitalised AGAIN. For 5 days. Yes,
          that sucked, but at that point in time, it was all right as it was a
          change of pace (as weird as that sounds), because I was actually
          facing interpersonal issues at home too &#128556;. Anyway, I
          eventually recovered, things calmed down, and everything went back to
          "normal".<br /><br />

          However, "normal" was me being alone in my room whilst the Summer
          holidays went on. Of course, I would love to be able go out and have
          fun, but I reminded myself that I was fighting a long, drawn-out war
          and I have to pull through this unpleasant time.
        </p>
      </div>

      <h1 class="m-2 font-bold border-4 p-4 rounded-lg hover:bg-orange-100">
        Gratitude
      </h1>
      <div class="m-2 border-4 p-4 rounded-lg">
        I'm not someone who expresses his gratitude nearly enough, but I'm
        really thankful for everyone who has helped me at any point through my
        journey.

        <ul class="list-disc list-inside">
          <li class="py-[4px]">
            <b>Doctors and Nurses</b>
            <p class="pl-[2.7ch]">
              I cannot understate how much a role the nurses played in my
              treatment, as they helped to change the dressing of my CVC line
              every week and also helped administer chemotheraphy. They are
              MVPs.
              <br />
              My doctor kept things real with me, gave me a clear picture of my
              situation at every step of the way, and also was really
              encouraging.
            </p>
          </li>
          <li>Family and Relatives</li>
          <li>Friends</li>
          <li>School mates</li>
          <li>God</li>
        </ul>
      </div>

      <h1 class="m-2 font-bold border-4 p-4 rounded-lg hover:bg-orange-100">
        Reflections
      </h1>
      <p class="m-2 border-4 p-4 rounded-lg">to add next time...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CancerPage',
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
