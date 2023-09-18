import React, { useEffect, useRef } from "react";
import silalblack from '../1_SILAL_ASSETS/silalgreen.png';
import mobleft from './mobleft.png';
import { useParams } from "react-router-dom";
import video from './video.m4v';

const Video = () => { 
    const { user_id } = useParams();
    useEffect(() =>{
        document.getElementById('navigator').style.opacity = 0;
        document.getElementById('navigator').style.display = 'none';
    },[])

    const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []); 
    

    return (
        <>
        <div className="qrscan">
            <div style={{display:"flex", justifyContent:"space-between",width:"100%"}}>
                <img id='head' style={{ width: '90px', height: '76px', marginLeft: '15px', marginTop: '15px'}} src={silalblack} alt="Nissan Laptop Cover"/>
                <img id='head' style={{ width: '155px', height: '76px', marginRight: '15px', marginTop: '15px'}} src={mobleft} alt="Nissan Laptop Cover"/>
            </div>

            <h1 className="nameheading" style={{fontSize:'30px', margin: '10px'}}>Hi, {user_id}!</h1>

            <div className="App">
                <div>
                    <video
                    className="videox"
                    playsInline
                    loop
                    controls
                    autoplay
                    alt="Teaser"
                    src={video}
                    ref={videoEl}
                    />
                </div>
            </div>
        </div>
            {/* <div className="main">
                <div className="form-items">
                    <div style={{justifyContent: 'center', alignItems: 'center'}}>
                        <img id='head' style={{width: '10%'}} src={silalblack} alt="Nissan Laptop Cover"/>
                    </div>
                    
                    <h1 style={{fontWeight:'1000', fontSize: '60px'}}>Video</h1>
                    <div className="App">
                        <h1>Autoplay example</h1>
                        <div>
                            <video
                                style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
                                playsInline
                                loop
                                muted
                                controls
                                alt="All the devices"
                                src="https://firebasestorage.googleapis.com/v0/b/assetuploadformbuilder.appspot.com/o/images%2FC7367%20(1).mp4?alt=media&token=59117ccd-b648-4cb7-b09e-37843f2f9f30"
                                ref={videoEl}
                            />
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Video