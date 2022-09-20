import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import globalStyles from '../styles'
import { formatearCantidad } from '../helpers'
import CircularProgress from 'react-native-circular-progress-indicator'
import Donut from './Donut'

const ControlPresupuesto = ({ presupuesto, gastos, resetearApp }) => {
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)
    const [porcentaje, setPorcentaje] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => Number(gasto.cantidad) + total, 0)

        const totalDisponible = presupuesto - totalGastado

        const nuevoPorcentaje = (
            ((presupuesto - totalDisponible) / presupuesto) * 100
        )


        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje)
        }, 1000);
        setGastado(totalGastado)
        setDisponible(totalDisponible)
    }, [gastos])

    const data = [{
        percentage: 8,
        color: 'tomato',
        max: 10
    }, {
        percentage: 14,
        color: 'skyblue',
        max: 20
    }, {
        percentage: 92,
        color: 'gold',
        max: 100
    }, {
        percentage: 240,
        color: '#222',
        max: 500
    }]

    return (
        <View style={styles.contenedor}>
            <View style={styles.centrarGrafica}>
                <CircularProgress
                    value={porcentaje}
                    duration={1000}
                    radius={150}
                    valueSuffix={'%'}
                    title='Gastado'
                    inActiveStrokeColor='#F5F5F5'
                    inActiveStrokeWidth={20}
                    activeStrokeColor='#2DB572'
                    activeStrokeWidth={20}
                    titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
                    titleColor='#64748B'
                />
                {/* <CircularProgress
                    value={porcentaje}
                    radius={120}
                    inActiveStrokeOpacity={0.5}
                    activeStrokeWidth={15}
                    inActiveStrokeWidth={20}
                    progressValueStyle={{ fontWeight: '100', color: 'white' }}
                    activeStrokeSecondaryColor="yellow"
                    inActiveStrokeColor="black"
                    duration={5000}
                    dashedStrokeConfig={{
                        count: 50,
                        width: 4,
                    }}
                /> */}
            </View>

            <View style={styles.contenedorTexto}>
                <Pressable
                    onLongPress={resetearApp}
                    style={styles.boton}
                >
                    <Text style={styles.textoBoton}>Reiniciar App</Text>
                </Pressable>

                <Text style={styles.valor}>
                    <Text style={styles.label}>Presupuesto: {''} </Text>
                    {formatearCantidad(presupuesto)}
                </Text>

                <Text style={styles.valor}>
                    <Text style={styles.label}>Disponible: {''}</Text>
                    {formatearCantidad(disponible)}
                </Text>

                <Text style={styles.valor}>
                    <Text style={styles.label}>Gastado: {''}</Text>
                    {formatearCantidad(gastado)}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        ...globalStyles.contenedor
    },
    centrarGrafica: {
        alignItems: 'center'
    },
    boton: {
        backgroundColor: '#F95663',
        padding: 10,
        marginBottom: 40,
        borderRadius: 5
    },
    textoBoton: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    contenedorTexto: {
        marginTop: 50
    },
    valor: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10
    },
    label: {
        fontWeight: '700',
        color: '#3B82F6'
    }
})

export default ControlPresupuesto
