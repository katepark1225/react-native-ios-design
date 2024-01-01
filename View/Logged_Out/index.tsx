import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import style from './style'
import { ReportingService } from '../../services/reporting'
import { ReportingAnalytics } from '../../interface/reporting'

const Logged_Out = () => {

  const [analytics, setAnalytics] = useState<ReportingAnalytics[]>([])
  useEffect(() => {
    ReportingService(payload)
    .then((data: any) => {
      setAnalytics(data[2].reverse())
    })
  }, [])

  const calculateHeight = (value: number) => {
    // Code block --!
    return value
  }

  const barChart = analytics !== null && analytics !== undefined && analytics.length > 0 ? (
    analytics.map((row, index) => (
      <View key={index} style={style.chart_pair}>
        <View style={style.chart}>
          <Text style={style.chart_txt}>{row.oppo}</Text>
          <View style={[style.bar, style.oppo_bar, { minHeight: 10, height: calculateHeight(row.oppo) }]} />
        </View>
        <View style={style.chart}>
          <Text style={style.chart_txt}>{row.lead}</Text>
          <View style={[style.bar, style.lead_bar, { minHeight: 10, height: calculateHeight(row.lead) }]} />
        </View>
      </View>
    ))
  ) : null

  return (
    <ScrollView>
      {barChart}
    </ScrollView>
  )
}

export default Logged_Out
