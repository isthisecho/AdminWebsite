import React, { useContext, useEffect, useState } from 'react'
import { DatabaseContext } from './DatabaseContext'
import ReactPlayer from 'react-player'
import pdf from '../pdf/deneme.pdf';
function Chapters() {
  const { chapterForm } = useContext(DatabaseContext);
  const [chapterFormValue, setChapterFormValue] = chapterForm;
  const [update, setUpdate] = useState(false);

  const removeChapter = (e, index) => {
    e.preventDefault();
    chapterFormValue.splice(index, 1);
    setUpdate(true);

  }
  useEffect(() => {
    setChapterFormValue([...chapterFormValue]);
    setUpdate(false);
  }, [update]);

  return (
    <div>
      {chapterFormValue.map((item, index) => {
        return (

          <>
            <div className="accordion accordion-flush" id="accordionFlushExample">



              <div className="card" style={{ marginBottom: '25px' }}>
                <h3 className="card-header">
                  Chapter {(index + 1)}
                </h3>
                <div className="card-body">
                  <h5 className="card-title" style={{ display: 'flex', justifyContent: 'center' }}>{item.chapterName} </h5>

                  <p className="card-text" style={{ display: 'flex', justifyContent: 'center' }}>{item.chapterDescription}</p>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px' }}>
                    {item.chapterVideo !== null && (
                      <ReactPlayer url={item.chapterVideo} controls={true} />
                    )

                    }


                  </div>
                  {index < 2 && (
                    <a className='btn btn-primary' href={require('../pdf/deneme.pdf')} target="_blank">See The Pdf</a>

                  )

                  }
                  {(index > 1 && item.chapterPdf !== null) && (
                    <a className='btn btn-primary' href={item.chapterPdf} target="_blank">See The Pdf</a>
                  )

                  }
                  <div style={{ marginLeft: '20px', display: 'flex', marginTop: '20px' }}>
                    <button className='btn btn-danger' onClick={(e) => removeChapter(e, index)}>
                      Delete
                    </button>
                  </div>






                </div>
              </div>

            </div>
          </>

        );
      })}
    </div>

  )
}

export default Chapters