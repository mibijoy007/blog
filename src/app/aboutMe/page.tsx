'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { TfiFacebook } from "react-icons/tfi";
import { FiGithub } from "react-icons/fi";

import { FaYoutube } from "react-icons/fa";
import Button from '@/components/Button';


type Props = {}

const AboutMe = (props: Props) => {
  return (
    <section className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mb-12 rounded-md bg-primary/[6%] py-11 px-8 dark:bg-dark/30 sm:p-[50px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-3xl text-center font-bold text-black dark:text-white sm:text-3xl lg:text-4xl xl:text-5xl">
                About Me
              </h2>



              {/* <div className="prose lg:prose-xl">
      <p className="text-lg">
      <Image src={'/my-image.jpeg'} width={300} height={80} alt='my-image' 
                  className="float-left mr-4 mb-4 w-1/4"
                  />
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet suscipit enim consequatur nobis voluptatum asperiores quidem! Alias eligendi rem maiores voluptatibus ea, obcaecati possimus. Eos deleniti temporibus alias, nihil incidunt ut aperiam nam eum a, tempore consequuntur, rem eaque provident quaerat cumque officia at repellendus totam. Deleniti porro nihil fugit praesentium atque, eius at adipisci animi consectetur autem aut minima asperiores sapiente ea eligendi possimus magnam quod est placeat magni, ducimus dicta vero officiis nesciunt. Eum vel delectus, earum soluta, iure rerum eaque quos quaerat aliquam expedita voluptate aspernatur, omnis qui recusandae numquam eveniet nobis ut? Vitae assumenda corporis alias quia vero fugiat minima. Harum, eligendi praesentium? Obcaecati consequatur aperiam cupiditate. Eius voluptatum, rerum nihil dolore quisquam architecto id optio culpa, esse provident deserunt voluptate, repudiandae omnis natus modi adipisci facilis excepturi? Dolorum natus hic, doloribus ipsam ullam sequi. Officiis dolorum alias velit doloremque natus hic atque quae quaerat dolores perspiciatis ea modi totam error, ipsam facilis inventore maxime saepe porro consequatur assumenda provident voluptas nesciunt enim harum. Obcaecati asperiores corporis aliquid adipisci nemo nostrum placeat ea atque. Repudiandae vero obcaecati labore molestiae assumenda eos ratione, illo necessitatibus laborum tenetur fugiat aut laboriosam corporis in culpa reiciendis dicta harum quaerat a sunt at? Cum consequatur neque reprehenderit dolorum nostrum unde nobis veritatis aperiam temporibus, vitae dolores. Rem harum fugit fuga voluptatem iste eos provident nemo tenetur dolores, molestiae veniam veritatis blanditiis sint mollitia voluptatibus explicabo, ipsam inventore aliquam ad totam accusamus similique velit! Necessitatibus corporis odit repudiandae magni dignissimos ab quae perspiciatis accusamus, earum, expedita mollitia voluptates rerum, nemo incidunt fuga ipsum iusto aspernatur quia? A, minima molestiae? Vero, quasi perferendis iusto illum facere facilis. Eum earum porro dolore officia iusto vitae. Reiciendis animi repellendus reprehenderit adipisci incidunt vitae, nobis eum totam fugiat commodi qui quas consequatur iste laborum perspiciatis maxime. Et sunt amet iste distinctio dolore expedita iure facilis cupiditate id possimus voluptatibus pariatur autem itaque rerum saepe numquam tempora asperiores explicabo quas sint, sit nam ducimus beatae necessitatibus. Eligendi magnam sed itaque assumenda deleniti voluptas, repudiandae, nihil qui unde quam inventore possimus, beatae laboriosam amet odit ipsum facilis. Nobis fugiat delectus perferendis voluptatem, iste minima, modi ullam cupiditate et asperiores beatae velit quam in molestias est earum soluta, sed distinctio facilis non! Voluptatibus praesentium, similique minus quam reiciendis esse dignissimos eius obcaecati quas aliquam velit dolore sit rerum illo vitae repellat? Totam consequatur modi laudantium eaque velit fugiat necessitatibus. Eos iure corporis modi explicabo qui, maiores ratione minima excepturi incidunt ea magni quos, reprehenderit iusto! Consequuntur quos minima eaque atque! Sit vero ducimus iure explicabo dolore repellat porro aliquam architecto modi corporis, temporibus quas ullam ipsum? Enim ducimus laudantium incidunt? Dolor, expedita impedit veritatis aut quisquam maxime maiores, earum dolorum incidunt porro magnam iure. Sapiente itaque est voluptate voluptatem et consequatur ullam tempora rerum, facere, autem obcaecati natus tenetur vero laborum ut mollitia molestias alias quidem! Sit cum nobis ratione sequi cupiditate id inventore a, quod magni dolor molestiae cumque! Soluta ipsum molestiae voluptate commodi officia nemo, aspernatur earum fuga numquam placeat modi illo cupiditate doloremque quos, quaerat adipisci accusantium distinctio maiores doloribus eligendi veritatis? Nulla, porro alias ratione non ea quia deserunt in maiores possimus nihil, rerum rem quisquam, doloremque incidunt saepe eos ullam iure repudiandae cumque minus consequatur. Est vel odio mollitia, aut sint illo velit labore unde accusantium rem fugit vero fugiat saepe molestiae. Sed nesciunt repellendus, tempora quaerat quae ipsam voluptate itaque velit, eius at possimus, assumenda unde cumque earum non? Fuga, temporibus! Dicta odio, unde voluptatum rerum adipisci aliquid esse beatae, soluta similique temporibus, eos officia quaerat magni tempora facere doloremque vero accusamus iste laudantium dignissimos! Magni, ut. 
      </p>
    </div> */}



              <div className='lg:flex gap-8 mt-8 lg:justify-center'>
                <div className=' flex-shrink-0  justify-center items-center lg:block'>
                  <Image src={'/my-image.jpeg'} width={300} height={80} alt='my-image'
                    className='object-cover rounded-3xl'
                  />

                  <div className=" gap-4 font-mono mt-4">


                    <span className="lg:font-bold tracking-tighter lg:tracking-normal lg:text-xl mr-1 ">Checkout My Other Porjects:</span>
                    <br />
                    <div className='flex justify-left items-center gap-8'>


                      <div className='flex flex-shrink-0 '>

                        <Link href={'https://github.com/mibijoy007'}
                          className="border-4  border-black dark:border-white rounded-lg border-transparent p-1 hover:border-4 hover:dark:border-primary/90 hover:border-primary/90  my-4 "
                        >
                          <FiGithub size={35} />
                        </Link>
                      </div>

                      <div className='font-bold '>
                        Or,
                      </div>

                      <Link
                        href={'/contacts'}
                        className="font-bold mr-1 text-xl hover:underline hover:text-primary"
                      >
                        <Button title='Reach Me' />
                      </Link>
                    </div>
                  </div>


                </div>
                <div className='mt-4 lg:mt-0 font-sans lg:text-xl text-justify text-lessWhite/70'>
                 
                    <span className=''>Hi,</span> 

                    <p>
                      Welcome to my blog. I&apos;m Maksudul Islam,  a Full-Stack Web Developer with over 3 years of hands-on experience, specializing in the MERN stack with TypeScript. My journey in web development has equipped me with a deep understanding of both frontend and backend technologies, enabling me to deliver dynamic, high-performance web solutions that prioritize seamless user experiences.
                      <br /><br />

                      I have worked with React and Next.js, utilizing Redux Toolkit and RTK Query for effective state management, ensuring that applications are both performant and maintainable. My expertise in Tailwind CSS has further allowed me to craft visually appealing and highly customizable frontends.
                      <br /><br />

                      On the backend, I have leveraged Node.js and Express.js, along with TypeScript, to create reliable and efficient server-side architectures, ensuring that applications are not only powerful but also secure.
                      <br /><br />

                      My experience with databases such as PostgreSQL and MongoDB has been crucial in managing data efficiently and securely, enabling the creation of robust applications that handle large amounts of data with ease.
                      <br /><br />

                      I&apos;ve integrated cloud computing and DevOps practices into my development workflow, utilizing AWS for scalable cloud solutions, Docker for containerization, and setting up CD/CI in GitHub to ensure seamless deployment in various environments.
                      <br /><br />

                      In addition to my technical skills, before diving into full-stack development, I spent time teaching high school Math and Physics. This experience was instrumental in developing my analytical thinking and problem-solving abilities. I enjoyed guiding students through complex problems, discussing different approaches, and finding the most effective solutions.
                      This skill set has seamlessly transitioned into my work as a developer, particularly when it comes to debugging complex issues and optimizing applications for performance. I approach every challenge methodically, drawing from a diverse toolkit of programming languages, frameworks, and best practices to find the most effective solution.

                      <br /><br />
                      Recently, I&apos;ve been exploring the integration of AI and Python into web development, aiming to create smarter applications. This exploration is driven by my desire to stay at the forefront of technology and continuously improve the efficiency and impact of the solutions I develop.

                      <br /><br />
                      {/* I am actively seeking a full-time position where I can contribute my skills to innovative projects, collaborate with talented teams, and continue expanding my expertise in a fast-paced development environment.
                      <br /><br /> */}

                      Thanks for reading.
                    </p>
                 
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe