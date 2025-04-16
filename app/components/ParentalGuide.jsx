// components/TeenPrograms.jsx
import Image from 'next/image';

const programData = [
  {
    title: 'Oxford Excellence',
    image: '/images/ox.jpg',
    description: 'For those hoping to progress to higher education within the next couple of years, the pressure is on. Not only are the stakes higher when it comes to academic attainment, but also in terms of choosing the right degree. We are proud to offer a solution in the form of our bespoke summer programmes, each of which offers 35-40 hours of intensive tuition over two weeks.Stepping outside the traditional classroom and exploring a subject in such depth is an investment, with invaluable returns: the motivation and sense of direction necessary to excel in the final years of school and competitive university application process. An Oxford Royale summer school on your child’s personal statement or CV is a sure sign of their commitment, guaranteed to impress admissions faculty and employers alike.',
  },
  {
    title: 'Work and Life',
    image: '/images/wl.JPG',
    description: 'Entering the workforce is also just on the horizon for older teenagers. Bearing in mind the conscientiousness of this generation in seeking for meaningful work, as well as the need for adaptability in an employment landscape undergoing significant restructuring due to technological advances, we have endeavoured to provide an education that will equip young people with the tools to thrive in the face of change. This includes an emphasis on highly transferable ‘soft’ skills, including leadership, public speaking, active listening, collaboration, and negotiation abilities.We will work on developing these alongside the skills specific to students’ fields of interest, which they will learn in the simulated professional scenarios on their chosen programme. ',
  },
  {
    title: 'Student Welfare',
    image: '/images/sw.jpg',
    description: 'The wellbeing of students should be the number-one priority of every educational enterprise. Without it, success is built upon shaky foundations. It is therefore of the utmost importance to us that your teenager’s experience on our programmes is a safe and happy one. Above and beyond implementing age-appropriate safe-guarding measures, we wish to reassure our parents that our programmes are designed to engage and challenge your teenagers, not overwhelm them. We empathise with 16-18-year-olds who may feel overwhelmed by the gravity of the decisions that face them, and guarantee that our award-winning pastoral staff will be available twenty-four-seven to support them.',
  },
  {
    title: 'A Global Education',
    image: '/images/ge.jpg',
    description: 'We are proud to have welcomed students from over 175 countries, making us the world’s most global summer school. We believe that the multicultural nature of our programmes is key to our offer of enrichment, as it allows students to learn alongside peers from all around the world, and develop new perspectives from sharing experience. In a world whose balance depends increasingly upon sound international relations, our contribution is to foster camaraderie, clarity of communication, and collaboration among the next generation of leaders. For 16-18-year-olds especially, this is also an excellent opportunity to get a flavour of studying alongside international peers at one of the world’s top universities.',
  },
  {
    title: 'A Summer of Fun',
    image: '/images/sf.JPG',
    description: 'Although the summer holidays offer an excellent opportunity to get ahead of the game academically and organise oneself for the year to come, taking the time off to enjoy some repose is equally as important. We have crafted our programmes to integrate the perfect balance of hard work and fun, so that 16-18-year-olds especially will feel like they have not missed out on a summer’s relaxation. The hours of teaching and workshops are complemented by a thrilling programme of extracurriculars, including activities such as karaoke and game nights, enrichment excursions, and opportunities to explore the city with newfound friends. Not only will this be a summer to shape your teenager’s future, but one full of amazing memories, too!',
  },
];

export default function ParentalGuide() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 py-8 ">
      <h2 className="text-3xl font-bold mb-6 text-center md:text-[36px]">
      How Will You Help My 12-18 Year Old?
      </h2>
      <p className="my-8 md:pb-20 pb-10  text-justify text-grey">
      Our 16-18 programmes are expertly crafted to help your teen approach the transition to higher education and the early stages of their career with confidence and ease. The academic material, as much as the undergraduate accommodation, provides students with a flavour of what it would be like to study their subject at university, while a wide range of extracurricular activities offers a window onto the diverse opportunities student life has to offer.      </p>

      <div className="space-y-12">
        {programData.map((program, index) => {
          // For md+, reverse every other item:
          const reverseFlex = index % 2 === 1 ? 'md:flex-row-reverse' : '';
          // For md+, apply negative margin to overlap images (not the first item):
          const overlapMargin = index > 0 ? 'md:-mt-36' : 'md:mt-0';

          return (
            <div
              key={index}
              className={`md:flex md:items-start md:space-x-4 md:justify-between ${reverseFlex}`}
            >
              {/* TEXT COLUMN (stacks normally on mobile) */}
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-[40px] uppercase font-semibold">{program.title}</h3>
                <p className="mt-2 text-grey text-justify py-6">{program.description}</p>
              </div>

              {/* IMAGE COLUMN */}
              <div className="md:w-1/2 relative">
                {/* On mobile, there's no negative margin; on md+, apply overlap */}
                <div className={`relative z-10 ${overlapMargin}`}>
                  <Image
                    src={program.image}
                    alt={program.title}
                    width={500}
                    height={627}
                    className="
                      w-full             /* Mobile: fill container width */
                      md:w-[550px]    /* Medium screens: specific width */
                      md:h-[627px]       /* Medium screens: specific height */
                      object-cover
                      rounded-tr-[30px]
                      mx-2
                    "
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
