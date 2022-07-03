
import React,{memo} from 'react'
import LazyLoad from 'react-lazyload'
import music from './music.png'
import {useNavigate} from 'react-router-dom'
import {ListWrapper,ListItem,List} from './style'
 function RecommendList({recommendList}) {
     let navigate=useNavigate()
     const getDetail=(id)=>{
         navigate(`/recommend/${id}`)
     }
  return (
    <ListWrapper>
        <h1 className='title'>推荐歌单</h1>
        <List>
        {
            recommendList.map(item=>{
                return(
                    <ListItem key={item.id} onClick={getDetail.bind(null,item.id)}>
                        <div className="img_wrapper">
                            <div className="decorate"></div>
                            <LazyLoad placeholder={<img width="100%" height="100%" src={music}/>}>
                                <img width="100%" height="100%" src={item.picUrl+'param=300*300'}/>
                            </LazyLoad>
                        </div>

                    </ListItem>
                )
            })
        }
        </List>
    </ListWrapper>
  )
}
//性能优化
export default memo(RecommendList)