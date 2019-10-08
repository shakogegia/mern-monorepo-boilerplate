import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import Colors from '../constants/Colors'

export default function TabBarIcon({ name, focused }) {
  return (
    <Ionicons
      name={name}
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  )
}
