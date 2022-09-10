import React, { useEffect, useState } from 'react'
import Facebookimage1 from '../../Assets/Facebook__image__1_.png'
import images from '../../Assets/images.jpg'
import Spinner from '../../Components/Spinner/Spinner'
import './Style.css'
const AboutUs = () => {

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  })
  return (
    <>
    {loading ? <Spinner /> : 
    <div>
      <h1 style={{textAlign: 'center'}}>О нас</h1>
      <div className="facebook__container">
        <div className="facebookBlock__1">
          <p>
          Facebook — популярная социальная сеть в качестве продвижения товаров или услуг компаний. Facebook предоставляет пользователям возможность оставлять отзывы, так как подписчики могут комментировать публикации, выставлять оценки страницам брендов, чтобы их могли видеть другие. Facebook может ссылаться на страницу продукта в Twitter’е, а также отправлять напоминания о событиях. 
          </p>
          <img src={Facebookimage1} style={{maxWidth: 550, borderRadius: 20}}/>
        </div>
        <div className="facebookBlock__2">
        <img src={images} style={{width: 550, borderRadius: 20}}/>
        <p>
          Facebook — популярная социальная сеть в качестве продвижения товаров или услуг компаний. Facebook предоставляет пользователям возможность оставлять отзывы, так как подписчики могут комментировать публикации, выставлять оценки страницам брендов, чтобы их могли видеть другие. Facebook может ссылаться на страницу продукта в Twitter’е, а также отправлять напоминания о событиях. 
          </p>
        </div>
      </div>
    </div>
    }
    </>
  )
}

export default AboutUs