import { useEffect, useState } from "react"
import { Pie } from "@ant-design/plots"
import { get } from "../../utils/request"
import { getCookie } from "../../helpers/cookie"
import "./style.scss"

function Home() {
  const token = getCookie("tokenUser")
  const [data, setData] = useState([])
  const config = {
    data: data,
    angleField: "value",
    colorField: "type",
    innerRadius: 0.6,
    label: {
      text: "value",
      style: {
        fontWeight: "bold",
      },
    },
    legend: {
      color: {
        title: false,
        position: "right",
      },
    },
    annotations: [
      {
        type: "text",
        style: {
          text: "Tasks\nAnalysis",
          x: "50%",
          y: "50%",
          textAlign: "center",
          fontSize: 40,
          fontStyle: "bold",
        },
      },
    ],
  }

  useEffect(() => {
    const fetchApi = async () => {
      const result = await get(token, "task/statistic/status")
      setData(result.map((item) => ({ type: item.status, value: item.value })))
    }
    fetchApi()
  }, [])

  return (
    <>
      {data.length > 0 ? <Pie {...config} className="chart" /> : <div>Loading....</div> }
    </>
  )
}

export default Home
