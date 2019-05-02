import React from 'react'

export const EnergyUsuageAlert=({showWarning}) => {
  return (
    <div>
        {showWarning && <div className="alert">
            <span className="closebtn" onClick={()=>{
                    document.getElementsByClassName("alert")[0].style.display="none";
                }
            }>&times;</span>  
            <strong>Attention!</strong> Your energy usage is currently above the alert threshold!
        </div>}
    </div>
  )
}

export const SettingsAlert=({success, showAlert}) => {
  return (
    <div>
        {showAlert&&(!success? <div className="alert">
                    <span className="closebtn" onClick={()=>{
                            document.getElementsByClassName("alert")[0].style.display="none";
                        }
                    }>&times;</span>  
                    <strong>Error!</strong> Please fix the problems before submit.
                </div> :

        <div className="alert success">
            <span className="closebtn" onClick={()=>{
                    document.getElementsByClassName("alert")[0].style.display="none"}}>&times;</span>  
            <strong>Success!</strong> Updated Settings successfully!
        </div>)}
    </div>
  )
}

