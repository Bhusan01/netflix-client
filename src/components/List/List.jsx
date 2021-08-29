import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import  React from 'react';
import { useRef , useState} from 'react';
import ListItem from '../listItem/ListItem';
import './list.scss';

const List = ({list}) => {
    const [isMoved , setIsMoved] = useState(false)
    const [slideNumber, setSlideNumber] = useState(0)
    const [clickLimit, setClickLimit] = useState(window.innerWidth / 230)
    const [distanse, setDistanse] = useState(0)
    const listRef = useRef()

    const handleClick = (direction) => {
        setIsMoved(true)
        if(direction === "left" && slideNumber >0) {
            setDistanse( 230 + distanse)
            listRef.current.style.transform = `translateX(${distanse}px)`
            setSlideNumber(slideNumber - 1)
        }
        if(direction === "right" && slideNumber < 10 - clickLimit) {
            setDistanse( -230 + distanse)
            listRef.current.style.transform = `translateX(${distanse}px)`
            setSlideNumber(slideNumber + 1)
        }
    }
    return (
        <div className="list">
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleClick("left")} style={{display: !isMoved && "none"}} />
                <div className="container" ref={listRef}>
                    {list.content.map((item) => (
                        <ListItem  item={item} />
                    ))}
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")} />
            </div>
        </div>
    )
}

export default List
