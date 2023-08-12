import React from 'react'
import { useState } from 'react'
import { Accordion,
    AccordionItemButton,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemState } from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css"
import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from '../../utils/accordion'
import './Value.css'

function Value() {
  return (
    <section className="v-wrapper">

    <div className='paddings innerWidth flexCenter v-container'>
        {/* ______________ left image section ____________ */}
        <div className="flexCenter v-left">
            <div className="image-container">
                <img src="./value.png" alt="" />
            </div>
        </div>
          {/* ______________ left ends ____________ */}

          <div className="v-right flexColStart">
          <span className='orangeText'>Our Value</span>
          <span className='primaryText'> Value We Give To You</span>
          <span className='secondaryText'>We always ready to help by providijng the best services for you.<br/>
We beleive a good blace to live can make your life bette</span>

            <Accordion 
            className='accordion'
            allowMultipleExpanded={false}
            preExpanded={[0]}
            >
                {
                    data.map((item,i)=>{
                        const [className,setClassName] = useState(null)
                        return(
                            <AccordionItem key={i} uuid={i} className={`a-Item ${className}`}>
                                <AccordionItemHeading className='a-heading'>
                                    <AccordionItemButton className='accordionButton'>
                                        <AccordionItemState>
                                            {({expanded})=>
                                            expanded? setClassName("expanded"): setClassName("collapsed")
                                            }
                                        </AccordionItemState>

                                <div className="flexCenter icon">
                                    {item.icon}
                                </div>
                                <span className='primaryText'>{item.heading}</span>
                                <div className="flexCenter icon">
                                    <MdOutlineArrowDropDown size={20} />
                                </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='secondaryText'>{item.detail}</p>
                            </AccordionItemPanel>
                            </AccordionItem>
                        )
                    })
                }

            </Accordion>

          </div>

    </div>
    </section>
  )
}

export default Value