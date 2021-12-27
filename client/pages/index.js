import React, {useState, useCallback} from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'react-json-pretty/themes/monikai.css';
import MainPage from "../src/components/mainPage";
import { api } from '../src/constants'
//=--------------
import {FormControl, InputLabel, MenuItem, Select, Alert} from '@mui/material';


export default function Home({tenants, shapeNames, shapeDefinitions, err}) {
  const [tenant, setTenant] = useState(tenants[0] || '');
  const [shapes, setShapes] = useState(shapeNames || []);
  const [definitions, setShapeDefinitions] = useState(shapeDefinitions || [])
  const [error, setError] = useState(err);

  const changeTenant = useCallback((e) => {
    const {value} = e.target;
    const newTenant = tenants.filter(t => t.id === value)[0];
    setTenant(newTenant);
    // TODO: remove this!
    if (newTenant.name === 'sandbox1') {
      getTenantData(newTenant.id+'d').then(res => {
        setShapes(res.shapeNames);
        setShapeDefinitions(res.shapeDefinitions);
        setError(res.err);
      })
    } else {
      getTenantData(newTenant.id).then(res => {
        setShapes(res.shapeNames);
        setShapeDefinitions(res.shapeDefinitions);
        setError(res.err);
      })
    }
  }, [tenants])

  return (
      <div className={styles.container}>
        <Head>
          <title>Crystallise visualisation</title>
          <meta name="description" content="Based on create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {error && <Alert severity="error">{error}</Alert>}
        {!!tenants.length &&
          (<FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
            <InputLabel id="tenants-label">Tenants</InputLabel>
            <Select
              labelId="tenant-select-label"
              value={tenant.id}
              defaultValue={tenants[0].id}
              onChange={changeTenant}
            >
              {tenants.map(tenant => (
                <MenuItem value={tenant.id} key={tenant.id}>{tenant.name}</MenuItem>
              ))}
            </Select>
          </FormControl>)}
        {!error &&
          (<main className={styles.main}>
        {shapes ? <MainPage names={shapes} definitions={definitions}/> : null}
          </main>)}
        <footer className={styles.footer}>
          Footer
        </footer>
      </div>
  )
}

const getTenantData = async (tenant) => {
  let res;
  let shapeNames = [];
  let shapeDefinitions = [];
  try {
    res = await fetch(`${api}/shapeNames/${tenant}`)
    if (res.status == 403) throw new Error((await res.json()).message)
    shapeNames = await res.json();
  } catch (e) {
    return {shapeNames, shapeDefinitions, err: `Error on fetching shape names! Error details: ${e.message}`}
  }

  const definitions = [];

  shapeNames.forEach( shape => {
    definitions.push(fetch(`${api}/shapeDefinition?tenant=${tenant}&shape=${shape.identifier}` ).then(res => res.json()))
  });

  try {
    shapeDefinitions = await Promise.all(definitions);
  } catch (e) {
    return {shapeNames, shapeDefinitions, err: `Error on fetching shape definitions! Check log. Error details: ${e.message}`}
  }
  return {shapeNames, shapeDefinitions, err: false}
}

export async function getStaticProps() {
  let res;
  let tenants = [];
  try {
    res = await fetch(`${api}/tenants`)
    tenants = await res.json()
  } catch (e) {
    return {
      props: { tenants: [], shapeNames: [], shapeDefinitions: [], err: `Error on fetching tenants! Error details: ${e.message}`}
    }
  }

  if (!tenants) {
    return {
      props: { tenants: [], shapeNames: [], shapeDefinitions: [], err: 'Tenants array is empty!'}
    }
  }

  let {shapeNames, shapeDefinitions, err} = await getTenantData(tenants[0].id)

  return {
    props: { tenants, shapeNames, shapeDefinitions, err },
  }

}