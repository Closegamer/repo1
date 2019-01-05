import React, { Component } from 'react';
import bg from './images/dreamCatcherMed.jpg';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: `url(${bg})`,
    height: '100%',
    backgroundSize: 'cover',
    textAlign: 'center',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 1.5,
    textAlign: 'center',
    opacity: 0.8,
    color: theme.palette.text.secondary,
  },
});

class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Grid container justify='center'>
          <Grid item xs={12} sm={10} md={10} lg={8}>
            <Paper className={classes.paper}>Привет!</Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={10} lg={8}>
            <Paper className={classes.paper}>У каждого из нас есть мечта.</Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={10} lg={8}>
            <Paper className={classes.paper}>С раннего детства у меня появилась одна самая главная и заветная.</Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={10} lg={8}>
            <Paper className={classes.paper}> Очень важная, очень желанная, но пока еще очень далекая мечта.</Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={10} lg={8}>
            <Paper className={classes.paper}>Я так долго стремлюсь к ней, а она еще так далека, что мне пришла мысль попросить помощи у вас.</Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={10} lg={8}>
            <Paper className={classes.paper}>Я не стесняюсь мечтать!</Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={10} lg={8}>
            <Paper className={classes.paper}>А вы - можете помочь моей мечте осуществиться! Это просто: сделать перевод любых средств, которых вам не жалко отдать для осуществления моей мечты.</Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={10} lg={8}>
            <Paper className={classes.paper}>Для вас это будет незначительная сумма, а для меня - еще один шаг навстречу мечте.</Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Paper className={classes.paper}>
              <iframe 
                src="https://money.yandex.ru/quickpay/shop-widget?writer=seller&targets=%D0%9D%D0%B0%20%D0%BC%D0%B5%D1%87%D1%82%D1%83!&targets-hint=&default-sum=10&button-text=11&payment-type-choice=on&hint=&successURL=https%3A%2F%2Fmydreamt.ru%2Fthanks.html&quickpay=shop&account=410011268431176" 
                width="100%" 
                height="219" 
                frameborder="0" 
                allowtransparency="true" 
                scrolling="no"
              ></iframe>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={10} lg={8}>
            <Paper className={classes.paper}>Я ВЕРЮ, что все добро возвращается, и я помогу сбыться вашей мечте, ведь так случалось уже не раз!</Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={10} lg={8}>
            <Paper className={classes.paper}>Круговорот волшебства не должен замыкаться.</Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={10} lg={8}>
            <Paper className={classes.paper}>Вы верите в чудеса?</Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={10} lg={8}>
            <Paper className={classes.paper}>Я - да!</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
