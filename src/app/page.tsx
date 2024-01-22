'use client'

import Button from '@/components/Button'
import Processing from '@/components/Processing'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'


export default function Home() {

  return (
    <div>
      {/* Homepage
      <p className='text-black'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit pariatur hic ea quos! Officia sapiente tempore odio repellendus voluptates optio aliquid cum deserunt voluptatem fugit quas modi, dolores recusandae corrupti at amet nulla repudiandae consequatur vel magnam? Temporibus ab ut aliquid quaerat voluptatem nesciunt quod corporis, illo autem enim? Nobis atque tenetur eum placeat quam recusandae minus neque esse sit est perferendis, perspiciatis vero delectus, odio labore, molestiae ut incidunt mollitia quidem. Adipisci magnam fuga animi reiciendis vero maxime? Voluptate in sit temporibus animi corrupti eos veniam at eveniet magni nihil, itaque natus incidunt nostrum tempora non excepturi suscipit quas, quo dolorum doloribus aliquam, possimus placeat? Vitae itaque odio, illum, totam doloremque modi similique nemo eaque voluptas voluptate explicabo possimus error consequuntur architecto facere quae! Ipsam et molestiae nihil error nostrum, officia, eaque numquam reprehenderit, aut dignissimos ea saepe? Aliquam quos veritatis adipisci ratione iusto incidunt explicabo eaque eum? Iste quidem fugit neque laborum! Vitae dolores minima, eligendi repellendus, ea enim est porro perferendis dolor culpa voluptatum a ducimus placeat id impedit, quis magnam hic nihil voluptate corrupti veritatis. Libero reiciendis consequuntur explicabo, distinctio aspernatur officia voluptas voluptatum deleniti veritatis itaque saepe voluptates consectetur voluptate blanditiis nihil quaerat unde nulla est, sunt odio eaque. Repellat optio, hic perspiciatis itaque sed dolor incidunt iusto minus quas excepturi maxime vel ex modi corrupti veniam dolore? Quam necessitatibus fuga beatae distinctio quo veritatis non ipsum expedita tempore voluptatum facilis vitae dolorem sequi tenetur id iste dolor reiciendis minus, iusto, porro illo totam. Perspiciatis, et vitae? Deserunt quam, sequi dignissimos culpa natus reiciendis fuga veritatis, nobis doloribus explicabo est optio. Nostrum porro molestiae assumenda, soluta et ducimus quas veniam corporis quo nesciunt esse illo aperiam at pariatur temporibus accusantium, ullam commodi expedita. Architecto similique eveniet odio nihil perferendis saepe corporis facilis blanditiis rem qui illo hic nam itaque error vel, debitis natus ullam ipsum nemo repellat ad quaerat, sed harum rerum? Iusto laboriosam provident sapiente numquam accusamus illo id est ipsum aliquam tempora ea dolore officiis fuga suscipit reiciendis cum veniam quia quas ratione, delectus molestiae quam impedit. Corrupti qui quod adipisci unde odio facilis blanditiis tenetur dolore, eligendi, ad neque dolorem consequuntur non perspiciatis nam. Cupiditate unde sit qui necessitatibus nobis maiores dolor ex. Obcaecati error consectetur, totam voluptatem deserunt ipsam doloribus minima amet eaque corrupti nihil, atque aut, nisi fuga eos nesciunt commodi explicabo rem deleniti culpa quo. Fugit veritatis eos sapiente odio ab vitae, labore dolores esse iste obcaecati doloribus modi, in officiis delectus excepturi est cupiditate quibusdam. Vitae illum perferendis aliquid fuga tempora dicta beatae distinctio! Amet magnam praesentium aspernatur quidem? Nam corrupti nobis quod aut illum temporibus libero veniam cupiditate suscipit labore. Facilis corporis dolore aperiam iure at? Temporibus veniam quibusdam ullam exercitationem facilis repudiandae quo at adipisci asperiores sunt. Ducimus cumque tempore sit molestiae nihil, beatae ex obcaecati a, tempora optio velit consequatur iure. Sint quae natus earum aspernatur eius molestias ratione, optio alias distinctio fugiat at soluta cum vero. Delectus qui, ex iusto aspernatur facilis quas ratione distinctio cupiditate dicta saepe, laudantium error quos necessitatibus tenetur illo! Odit sunt eaque mollitia. Aut fugit at est, perspiciatis nam harum culpa ipsam, vero mollitia hic, a amet. Quae corrupti libero tenetur dolores quasi dignissimos exercitationem excepturi expedita id commodi, dolorum harum, illum nesciunt voluptates! Fugiat animi, consequatur culpa eos praesentium atque et quod ducimus dolorem voluptas amet accusamus vitae temporibus quisquam qui possimus expedita porro magnam quibusdam consectetur explicabo eius! Dolore eligendi earum ut perspiciatis accusamus porro voluptas maxime, harum obcaecati consequuntur animi velit enim eveniet officia asperiores corporis dolorem vitae. Deserunt laboriosam ducimus incidunt blanditiis mollitia natus, quae delectus laborum magni quod rerum enim quo impedit soluta temporibus dolore. Hic quo repudiandae architecto sint obcaecati blanditiis ad enim deleniti animi aut. Hic et harum recusandae nesciunt optio temporibus magnam aperiam facere nihil facilis culpa expedita, pariatur earum non perferendis accusantium unde corporis commodi tenetur maxime dicta! Labore tenetur laborum laudantium autem est doloremque ab soluta quas possimus. Quibusdam rem non, reiciendis officia iste perspiciatis nam quos tenetur laborum. Laudantium alias consectetur deleniti distinctio sunt architecto tenetur adipisci molestiae commodi illum, neque, molestias pariatur quas a vero veritatis sit, quibusdam maxime impedit cum ratione? Laboriosam rem asperiores repellat? Accusamus repellendus facere sit earum doloribus tempora iusto, atque officiis eligendi, deleniti ipsam pariatur aliquam alias et. Quod velit maiores doloremque quaerat sit minus natus, laborum impedit! Ipsum cupiditate numquam rem totam quam porro quod libero, iste atque dicta iure earum voluptas, accusantium optio necessitatibus doloremque temporibus nihil, quidem cumque. Magnam voluptatum dolore mollitia cupiditate asperiores, voluptas, distinctio expedita aspernatur praesentium vel ipsa obcaecati fugiat reprehenderit. Obcaecati esse excepturi ipsam laboriosam unde quaerat et voluptatem iure commodi, laudantium facilis dolore tenetur saepe quam ratione explicabo. Amet dolorum ut ipsam reiciendis quo odio ipsum. Eum sunt laborum delectus optio commodi ex, iure asperiores ea officiis autem maiores impedit cum ipsum laudantium? Error impedit quibusdam assumenda quisquam maxime tenetur beatae dolores magni cupiditate ratione ad ut ullam, delectus illum obcaecati dolorem nemo perferendis quod dolor saepe tempore reiciendis recusandae dolore. Rem id totam sunt quas minima eius alias, soluta delectus. Ad, blanditiis ipsum. Ipsa consequatur, quasi asperiores vero voluptatum impedit. Sapiente quia voluptatum officiis dolores autem illo, id rem nesciunt labore suscipit culpa libero minus modi impedit eum sunt fugit, minima rerum architecto necessitatibus unde in assumenda est dicta. Deleniti aperiam adipisci enim, aut reprehenderit consequatur sapiente totam accusantium ratione dolore nihil accusamus suscipit ipsum est cumque minus? Porro fuga nam, sunt ullam error, asperiores quisquam, vel cupiditate id dolore rem? Similique fugit reiciendis accusantium nobis alias ea ut ab temporibus! Cumque obcaecati qui architecto perspiciatis dolorum consequatur maiores ex possimus fuga error porro, ad eum harum culpa molestias quia quisquam a eligendi enim corrupti odit. Doloribus repellat inventore fugit consequuntur enim sequi animi aspernatur quidem. Dolorem, vitae! Esse, rem. Magnam cum odio explicabo, obcaecati aperiam nesciunt omnis ratione nam excepturi eum saepe illum repellendus mollitia neque quis in adipisci tempora sunt quae. Id totam sint rem eos nisi ipsa ipsam et? Expedita.
      </p> */}
      <section className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Next.js Full-Stack Website Using Next API Routes, Typescript, Tailwind, PostgreSQL, Prisma ORM 
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                  This is a full stack app which you can use to
                  create Blogs based on different category. 
                  {/* and also you can chat with others. This website is full of functionalities. */}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white 
                  hover:bg-primary/80"
                  href={"/blogs"}
                >
                  Explore All Blogs

                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
