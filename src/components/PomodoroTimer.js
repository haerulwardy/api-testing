import React, {useRef, useState, useEffect} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export default function PomodoroTimer() {
    const [pomodoro, setPomodoro] = useState(false)
    const pomodoroTime = 5
    const [workMinutes, setWorkMinutes] = useState(pomodoroTime)
    const[workSeconds, setWorkSeconds] = useState(0)
    const seconds = 60

    const [shortBreak, setShortBreak] = useState(false)
    
    const handleStart = () => {
        setPomodoro(!pomodoro)
        console.log('tes')
    }

    useEffect(() => {
        let interval = pomodoro && setInterval(function() {
            if(workSeconds <= 0) {
                let newWorkSecond = seconds - 1
                let newWorkMinutes = workMinutes - 1
                setWorkSeconds(newWorkSecond)
                setWorkMinutes(newWorkMinutes)
            }else if(workSeconds < seconds) {
                let newWorkSecond = workSeconds -1
                setWorkSeconds(newWorkSecond)
            }
        }, 100)
        if(workMinutes === 0 && workSeconds === 0) {
            setShortBreak(!shortBreak)
            setWorkMinutes(pomodoroTime)
            setWorkSeconds(0)
            setPomodoro(!pomodoro)
        }
        return () => clearInterval(interval)
    }, [workMinutes, workSeconds, pomodoro])

    const percentage = Math.floor(workMinutes / pomodoroTime * 100)
    return (
        <div className="pomodoro px-96 pt-20">
            <div className="pomodoro-container">
                <h1 className="text-center mb-12 text-5xl font-medium">{shortBreak ? 'Time to break!' : 'Time to focus!'}</h1>
                <div className="pomodoro-menu text-center">
                    <span className="text-2xl ml-4 cursor-pointer text-red-500 font-medium">Pomodoro</span>
                    <span className="text-2xl ml-4 cursor-pointer">Short Break</span>
                    <span className="text-2xl ml-4 cursor-pointer">Long break</span>
                </div>
                <div className="pomodoro-timer mt-8 w-2/6 mx-auto">
                    <CircularProgressbar
                    value={percentage}
                    text={workSeconds < 10 ? `${workMinutes}:0${workSeconds}` : `${workMinutes}:${workSeconds}`}
                    styles={buildStyles({
                        pathColor: `#EF4444`,
                        textColor: '#EF4444',
                        trailColor: '#E7EDFB',
                    })}
                    />;
                </div>
                <div className="pomodoro-button flex justify-center mt-4">
                    <div className="btn-start py-3 px-20 rounded-md cursor-pointer hover:bg-red-600 text-2xl bg-red-500 text-center text-white" onClick={handleStart}>Start</div>
                </div>
            </div>
            
        </div>
    )
}
