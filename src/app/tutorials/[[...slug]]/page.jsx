import Title from '@/components/Title';
import React from 'react'

const TutorialPage = async({params}) => {
    const {slug}=await params;
    const [technology,topic, ,page_no,subject]= slug || [];
    // const result=await params;
    console.log(slug)
  return (
    <div>
      <Title>{technology}_Tutorials</Title>
      <h2>{topic}</h2><hr />
      <div className="flex justify-between">
        <h3 className="font-bold">{subject}</h3>
        <p className="">Page no : {page_no}</p>
      </div>
      This is tutorials page 
    </div>
  )
}

export default TutorialPage
