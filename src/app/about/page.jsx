import Image from "next/image"
import Link from "next/link"
import AvocadoImg from "../../../public/avocados.jpg"

const About = () => {
  const avoFacts = [
    {
      id: "1",
      title: 'Most avocados come from Mexico',
      content:
        'While avocados are grown in California and Florida, the majority sold in grocery stores come from south central Mexico. The main reason for the abundance of “south of the border” avocados is that Mexico is blessed with a year-round growing climate. The avocado is believed to have originated in the state of Puebla, Mexico, as far back as 10,000 B.C.',
    },
    {
      id: "2",
      title: 'The conquistadors were huge fans.',
      content:
        'Spanish explorers arriving in Mexico during the 16th century survived on avocados and were the first Europeans to consume them. As a result of the Spanish Conquest, avocados spread to South America and Central America. ',
    },
    {
      id: "3",
      title: '“Avocado” wasn’t its original name.',
      content:
        'Irishman Sir Hans Sloane called it an avocado in 1696 in a Jamaican-plants catalog. He also dubbed the avocado tree the “alligator pear tree.”',
    },
    {
      id: "4",
      title: 'It’s actually a fruit.',
      content:
        'Did you know that an avocado is a fruit? While definitely not sweet, it falls firmly in the fruit-not the vegetable-family. That’s because the avocado tree is part of the flowering-plant family Lauraceae.',
    },
    {
      id: "5",
      title: 'There’s a secret trick to ripening them up quick',
      content:
        'Need to ripen that avocado ASAP? Place it in a brown paper bag with a banana or two. The bananas will release ethylene gas, a natural plant hormone that aids in ripening fruit. On the other hand, check out this guide to learn how to store them for later.',
    },
  ]
  
  return (
    <main className="flex justify-center mt-[14px]" >
      <div className="w-full sm:w-[700px]" >
        <h1 className="text-center text-[28px] font-bold mb-[14px] px-5">13 Surprising Facts About Avocados</h1>
        <figure className="mt-7 mb-[42px] px-5">
          <Image width="auto" height="auto" priority={true} sizes="(max-width: 100%)" src={AvocadoImg} alt="Avocados on a table" />
          <figcaption className="text-base text-center text-gray-900 mt-2">Originally from <Link className="text-base text-blue-700" href="https://www.tasteofhome.com/article/13-surprising-facts-about-avocados/">Taste of Home</Link> </figcaption>
        </figure>
        <ol className="flex justify-between flex-col sm:flex-row sm:flex-wrap gap-16 sm:gap-y-12 sm:gap-x-4  px-5">
          {avoFacts.map(({ title, content,id }) => (
            <li key={id} className="max-w-[305px] relative text-lg before:content-[counter(my-counter)] before:text-7xl before:font-bold before:absolute before:top-[-10px] before:left-[-5px]" >
              <h3 className="text-lg font-bold mb-7 pl-14">
                {title}
              </h3>
              <p className="text-base text-justify">{content}</p>
            </li>
          ))}
        </ol> 
      </div>
    </main>
  )
}

export default About