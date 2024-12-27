import React from "react";
import CardProject from "../components/ui/Card-project";
import BlurGradient from "../components/ui/Blur-gradient";

function Projects({ items }) {
  return (
    <>
      <div className="w-10/12 webkit-scrollbar-thumb-red-500 webkit-scrollbar-track-red-500 max-xl:w-full">
        <div className="grid grid-cols-2 grid-rows-1 w-full pr-2 mt-2 mb-28 max-md:mb-10 max-md:grid-cols-1 max-lg:grid-cols-1 max-lg:gap-2">

          <div className="flex flex-col gap-2 ">
            <CardProject
              classNameAditional={""}
              image={"redondo.svg"}
              altImage={"Proyecto 1"}
              title={"Proyecto 1"}
              backgroundTitle={"dark"}
              idLanguages={["javascript", "react", "tailwind", "html", "css"]}
              description={"Descripción del proyecto 1, aldskjfalk sdhnfkajb nvinerav, nads fna,sdnfñlasdkjf lkajsdfñlkas jdfñlkasdj fñainv kjng,mndvck jerg vkand sofñ ijhsfl kajdsofiñ jasklfdnoi rvklsdfnv ilsdhgf"}
              urlPage={"#"}
              urlGithub={"#"}
              items={items}
            />

            <CardProject
              classNameAditional={""}
              image={"redondo.svg"}
              altImage={"Proyecto 1"}
              title={"Proyecto 1"}
              backgroundTitle={"dark"}
              idLanguages={["javascript", "react", "tailwind", "html", "css"]}
              description={"Descripción del proyecto 1, aldskjfalk sdhnfkajb nvinerav, nads fna,sdnfñlasdkjf lkajsdfñlkas jdfñlkasdj fñainv kjng,mndvck jerg vkand sofñ ijhsfl kajdsofiñ jasklfdnoi rvklsdfnv ilsdhgf"}
              urlPage={"#"}
              urlGithub={"#"}
              items={items}
            />
          </div>

          <div className="flex flex-col gap-2">
            <CardProject
              classNameAditional={""}
              image={"proto.png"}
              altImage={"Proyecto 1"}
              title={"Proyecto 1"}
              backgroundTitle={""}
              idLanguages={["javascript", "react", "tailwind", "html", "css"]}
              description={"Descripción del proyecto 1, aldskjfalk sdhnfkajb nvinerav, nads fna,sdnfñlasdkjf lkajsdfñlkas jdfñlkasdj fñainv kjng,mndvck jerg vkand sofñ ijhsfl kajdsofiñ jasklfdnoi rvklsdfnv ilsdhgf"}
              urlPage={"#"}
              urlGithub={"#"}
              items={items}
            />

            <CardProject
              classNameAditional={""}
              image={"proto.png"}
              altImage={"Proyecto 1"}
              title={"Proyecto 1"}
              backgroundTitle={""}
              idLanguages={["javascript", "react", "tailwind", "html", "css"]}
              description={"Descripción del proyecto 1, aldskjfalk sdhnfkajb nvinerav, nads fna,sdnfñlasdkjf lkajsdfñlkas jdfñlkasdj fñainv kjng,mndvck jerg vkand sofñ ijhsfl kajdsofiñ jasklfdnoi rvklsdfnv ilsdhgf"}
              urlPage={"#"}
              urlGithub={"#"}
              items={items}
            />

            <CardProject
              classNameAditional={""}
              image={"proto.png"}
              altImage={"Proyecto 1"}
              title={"Proyecto 1"}
              backgroundTitle={""}
              idLanguages={["javascript", "react", "tailwind", "html", "css"]}
              description={"Descripción del proyecto 1, aldskjfalk sdhnfkajb nvinerav, nads fna,sdnfñlasdkjf lkajsdfñlkas jdfñlkasdj fñainv kjng,mndvck jerg vkand sofñ ijhsfl kajdsofiñ jasklfdnoi rvklsdfnv ilsdhgf"}
              urlPage={"#"}
              urlGithub={"#"}
              items={items}
            />
          </div>

        </div>

      </div>
      <BlurGradient className={"max-md:hidden"} />
    </>
  );
}

export default Projects;