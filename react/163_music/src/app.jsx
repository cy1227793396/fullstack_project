import { Logo } from './logo'
import  {GlobalStyle,Tab,TabItem} from './style'
export function App() {
  return (
    <div className='App'>
    <GlobalStyle></GlobalStyle>
    <Tab>
    
      <a>
        <span className="selected">推荐</span>
      </a>
      <a>
        <span>歌手</span>
      </a>
      <a>
        <span>排行榜</span>
      </a>
    
    </Tab>
    </div>
  )
}
