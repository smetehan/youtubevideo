import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  // const[urlData,setUrlData]=useState([
  //   {      url:"https://www.youtube.com/embed/cCGQRNAIPzE?si=i5kDugKFgyHGxT-P&autoplay=1&mute=1"
  //   },
   
  //   {      url:"https://www.youtube.com/embed/4hGU5D_uVis?si=Kz_W44KQs26xAPJ6&autoplay=1&mute=1"
  //   },
  //   {      url:"https://www.youtube.com/embed/L7ZuVBHy170?si=-kRICoSX9vq-JBJ_&autoplay=1&mute=1"
  //   },
  //   {      url:"https://www.youtube.com/embed/tYaAkcqFq88?si=WEZDnbBNWPXb5N3s&autoplay=1&mute=1"
  //   },
  //   {      url:"https://www.youtube.com/embed/5r4nSgHXQ24?si=F2RZzm66aJAR9O4u&autoplay=1&mute=1"
  //   },
  //   {      url:"https://www.youtube.com/embed/lkDUKPWcj-0?si=aU2LSJZKKjL1jLk2&autoplay=1&mute=1"
  //   },
  //   {      url:"https://www.youtube.com/embed/UJlbt8a5A8A?si=P5k5vpnZBFnrcaDo&autoplay=1&mute=1"
  //   },
  //   {      url:"https://www.youtube.com/embed/Ky04aoIYhMY?si=ffrz9EbwIZSx56VW&autoplay=1&mute=1"
  //   },
  //   {      url:"https://www.youtube.com/embed/1eYoSinTtEU?si=bzng7Qpc0JXbS_bf&autoplay=1&mute=1"
  //   },
  //   {      url:"https://www.youtube.com/embed/LF_tCbqRn-c?si=QqtDxyMz1DJgtdm4&autoplay=1&mute=1"
  //   },
  //   {      url:"https://www.youtube.com/embed/a7EbMeh0Kvk?si=ZQTjDuNUe4R0Seew&autoplay=1&mute=1"
  //   },
  //   {      url:"https://www.youtube.com/embed/ID5O1ojs74g?si=FBrlPpHi_X4ZRnTP&autoplay=1&mute=1"
  //   },
  //   {      url:"https://www.youtube.com/embed/r_I5SbC_i7U?si=ifGWxEaVnuxyC8SB&autoplay=1&mute=1"
  //   },
  //   {      url:"https://www.youtube.com/embed/T8R8HpGQGyM?si=y0Gh_CmNtF9rgpYi&autoplay=1&mute=1"
  //   },
  //   {      url:"https://www.youtube.com/embed/Src4w2ynEZ0?si=wXntoKSxOq5_9qky&autoplay=1&mute=1"
  //   },
  //   {      url:"https://www.youtube.com/embed/evnzOXSACoc?si=ltZBz2RR0ROEE9uT&autoplay=1&mute=1"
  //   },
  //   {      url:"https://www.youtube.com/embed/ddDffFvIYMU?si=N6s_tKWptA9uZ9ZF&autoplay=1&mute=1"
  //   },
  //   {      url:"https://www.youtube.com/embed/kk7bf6kDKdY?si=WlXfUjXc9XePtSMu&autoplay=1&mute=1"
  //   },
  //   {      url:"https://www.youtube.com/embed/73KzmKetRpA?si=ZXqcf7FoEz22lGLl&autoplay=1&mute=1"
  //   },
  //   {      url:"https://www.youtube.com/embed/5TJEpTVmcQs?si=iOBixDLbh-byK_Bw&autoplay=1&mute=1"
  //   },
  //   {      url:"https://www.youtube.com/embed/FvTa963mnfI?si=1qTBQA1XK3ZZxESl&autoplay=1&mute=1"
  //   },
  //   {      url:"https://www.youtube.com/embedxn8GFkM9V5Q?si=ulRqwSZAxOm1UJHc&autoplay=1&mute=1"
  //   },
  //   {      url:"https://www.youtube.com/embed/sEOkuXY3Ebc?si=IIoefZpoAd87zkJS&autoplay=1&mute=1"
  //   },
  //   {      url:"https://www.youtube.com/embed/ISPiDZX_b2U?si=iJZMqo1Iw3pejAyf&autoplay=1&mute=1"
  //   },
  //   {      url:"https://www.youtube.com/embed/T5qDpaijl6w?si=Hnexaao0QLCiui_X&autoplay=1&mute=1"
  //   },
  // ]);
  const[urlData,setUrlData]=useState([
    {      url:"https://www.youtube.com/watch?v=73KzmKetRpA"
    },
   
    {      url:"https://www.youtube.com/watch?v=5TJEpTVmcQs&t=2s"
    },
    {      url:"https://www.youtube.com/watch?v=FvTa963mnfI"
    },
    {      url:"https://www.youtube.com/watch?v=xn8GFkM9V5Q"
    },
    {      url:"https://www.youtube.com/watch?v=sEOkuXY3Ebc"
    },
    {      url:"https://www.youtube.com/watch?v=ISPiDZX_b2U"
    },
    {      url:"https://www.youtube.com/watch?v=T5qDpaijl6w"
    },
    {      url:"https://www.youtube.com/watch?v=cCGQRNAIPzE&t=3s"
    },
    {      url:"https://www.youtube.com/watch?v=4hGU5D_uVis"
    },
    {      url:"https://www.youtube.com/watch?v=L7ZuVBHy170&t=6s"
    },
    {      url:"https://www.youtube.com/watch?v=tYaAkcqFq88"
    },
    {      url:"https://www.youtube.com/watch?v=5r4nSgHXQ24"
    },
    {      url:"https://www.youtube.com/watch?v=lkDUKPWcj-0&t=25s"
    },
    {      url:"https://www.youtube.com/watch?v=UJlbt8a5A8A"
    },
    {      url:"https://www.youtube.com/watch?v=Ky04aoIYhMY"
    },
    {      url:"https://youtu.be/1eYoSinTtEU?si=p1XKOQoNoGIAqGLU"
    },
    {      url:"https://youtu.be/LF_tCbqRn-c?si=qfgAhcH9mPMe8Jzq"
    },
    {      url:"https://youtu.be/a7EbMeh0Kvk?si=XoSDWjjRLqX4vuP5"
    },
    {      url:"https://youtu.be/ID5O1ojs74g?si=_s_vGfRPVqjxgXr8"
    },
    {      url:"https://youtu.be/r_I5SbC_i7U?si=HIj0FQVT91CP-dDf"
    },
    {      url:"https://youtu.be/T8R8HpGQGyM?si=Y_D0PURbIAVdyTmS"
    },
    {      url:"https://youtu.be/Src4w2ynEZ0?si=EeTeWP__zqXMoSJd"
    },
    {      url:"https://youtu.be/evnzOXSACoc?si=e2MatDA1hcao4THF"
    },
    {      url:"https://youtu.be/ddDffFvIYMU?si=xW6MosbviG_6sO06"
    },
    {      url:"https://youtu.be/kk7bf6kDKdY?si=pLS2e-xO7F1uTAjf"
    },
  ])
//         useEffect(() => {
//         const interval = setInterval(() => {
//           window.location.reload();
//         }, 4 * 60 * 1000 + 10 * 1000); // 4 dakika 10 saniye = 250000 ms
    
//         // Temizlik işlemi
//         return () => clearInterval(interval);
//       }, []);
//       return (
//         <>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
//             {urlData.map((item, index) => (
//               <div key={index}>
//                 <iframe
//                   width="100%"
//                   height="315"
//                   src={item.url}
//                   title="YouTube video player"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   referrerPolicy="strict-origin-when-cross-origin"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//             ))}
//           </div>
//         </>
//       );
// }
const [tabs, setTabs] = useState([]); // Sekme referanslarını tutar

  useEffect(() => {
    // Tüm URL'leri aç
    const openedTabs = urlData.map((item) => window.open(item.url, "_blank"));
    setTabs(openedTabs);

    const interval = setInterval(() => {
      // Mevcut sekmeleri kapat
      tabs.forEach((tab) => tab && tab.close());

      // Yeni sekmeleri aç
      const newTabs = urlData.map((item) => window.open(item.url, "_blank"));
      setTabs(newTabs);
    }, 4 * 60 * 1000); // 4 dakika

    // Temizlik işlemi
    return () => {
      clearInterval(interval);
      tabs.forEach((tab) => tab && tab.close());
    };
  }, [tabs]);

  return (
    <div>
      <h1>Otomatik YouTube Video Açıcı</h1>
      <p>Toplam {urlData.length} video sırayla oynatılıyor...</p>
    </div>
  );
}


export default App;
