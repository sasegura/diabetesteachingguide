import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

import { presentations, siteTitle } from "assets/text";
import { useTranslation, withTranslation } from "react-i18next";
import { Card, CardMedia, CardActionArea, CardContent, Typography } from "@material-ui/core";


const topicsData = {
  "Introduction to Diabetes": {
    "img_en": require("assets/img/guide/1_introduction_to_diabetes.jpg").default,
    "img_es": require("assets/img/guide/1_introduccion_a_la_diabetes.jpg").default,
    "url": ""
  },
  "Nutrition and Carbohydrate Counting":{
    "img_en": require("assets/img/guide/2_nutrition_and_carbohydrate_counting.jpg").default,
    "img_es": require("assets/img/guide/2_nutricion_y_conteo_de_carbohidratos.jpg").default,
    "url": ""
  },
  "Physical Activity": {
    "img_en": require("assets/img/guide/3_physical_activity.jpg").default,
    "img_es": require("assets/img/guide/3_la_diabetes_y_la_actividad_fisica.jpg").default,
    "url": ""
  },
  "Weight Management": {
    "img_en": require("assets/img/guide/4_weight_management.jpg").default,
    "img_es": require("assets/img/guide/4_perdida_de_peso.jpg").default,
    "url": ""
  },
  "Blood Glucose Monitoring": {
    "img_en": require("assets/img/guide/5_blood_glucose_monitoring.jpg").default,
    "img_es": require("assets/img/guide/5_la_importancia_de_medir_la_glucosa.jpg").default,
    "url": ""
  },
  "Medication Management": {
    "img_en": require("assets/img/guide/6_medication_management.jpg").default,
    "img_es": require("assets/img/guide/6_las_medicinas_de_la_diabetes.jpg").default,
    "url": ""
  },
  "Complications of Uncontrolled Diabetes": {
    "img_en": require("assets/img/guide/7_complications_of_uncontrolled_diabetes.jpg").default,
    "img_es": require("assets/img/guide/7_complicaciones_de_la_diabetes.jpg").default,
    "url": ""
  },
  "Managing Sick Days": {
    "img_en": require("assets/img/guide/8_managing_sick_days.jpg").default,
    "img_es": require("assets/img/guide/8_manejo_de_los_dia_de_enfermedad.jpg").default,
    "url": ""
  },
  "Living with Diabetes": {
    "img_en": require("assets/img/guide/9_living_with_diabetes.jpg").default,
    "img_es": require("assets/img/guide/9_vivir_con_diabetes.jpg").default,
    "url": ""
  },
  "Insulin": {
    "img_en": require("assets/img/guide/10_insulin.jpg").default,
    "img_es": require("assets/img/guide/10_insulina.jpg").default,
    "url": ""
  }
};


function ProductSection() {
  const {t, i18n} = useTranslation();
  const classes = useStyles();

  const lang = i18n.resolvedLanguage;
  const topics = Object.keys(presentations.topics);
  const topicsComponent = topics && topics.map((key) => {
    const imgTitle = presentations.topics[key];
    return (
      <GridItem key={key} xs={12} sm={6} md={4}>
        <Card elevation={7}>
          <CardActionArea>
            <CardMedia component={"img"} alt={"..."} image={topicsData[imgTitle]["img_"+lang]} height="200px" title={imgTitle} />
            <CardContent>
              <Typography className={classes.title}>
                {t(presentations.topics[key])}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </GridItem>
    )
  });


  return (
    <GridContainer justifyContent="center">
      <GridItem xs={12} sm={12} md={10}>
        <Typography variant={"h5"} className={classes.title}>{t(siteTitle)}</Typography>

        <Typography variant={"body1"} align={"justify"} className={classes.description}>
          {t(presentations.explanation)}
        </Typography>
        <Typography variant={"body1"} align={"justify"} className={classes.description}>
          {t(presentations.explanation2)}
        </Typography>
        <Typography variant={"body1"} align={"justify"} className={classes.description}>
          {t(presentations.explanation3)}
          </Typography>

        <Typography variant={"body1"} className={classes.title}>
          {t(presentations.topicsIntro)}
        </Typography>
        <GridContainer xs={12} spacing={3} justifyContent="space-between" style={{ paddingBottom: "20px", marginLeft: "0px"}}>
          {topicsComponent}
        </GridContainer>
      </GridItem>
    </GridContainer>

  );
}

export default withTranslation("translations")(ProductSection);
