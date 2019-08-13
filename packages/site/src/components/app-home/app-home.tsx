import { Component, h } from "@stencil/core";
import { render as githubRender, GitHubButtonProps } from "github-buttons";

@Component({
  tag: "app-home",
  styleUrl: "app-home.scss"
})
export class AppHome {
  componentDidLoad() {
    this.renderGithubButton();
  }

  renderGithubButton() {
    const buttonProps: GitHubButtonProps = {
      href: "https://github.com/leoafarias/one-password-to-rule",
      title: "Star",
      "data-text": "Star",
      "data-show-count": false,
      "data-size": "large"
    };

    githubRender(buttonProps, function(el) {
      document.getElementById("github-button").appendChild(el);
    });
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-title>
            <ion-icon aria-label="optr icon" size="large" src="/assets/logo.svg" />
            <span>OPTR</span>
          </ion-title>
          <ion-buttons slot="end">
            <div id="github-button" />
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,
      <ion-grid>
        <ion-row>
          <ion-col size="12" sizeMd="5" offsetMd="1">
            <h1 class="title">
              One Password
              <br />
              to Rule Them All
            </h1>
            <p class="subheading">
              This project is meant to be an experiment on deterministic password generation and management.
            </p>
            <p class="description">
              Is it possible to create of easy to remember, hard to guess secure deterministic password framework. Do we
              have the ability to recover all of our passwords from memory?
            </p>
            <ion-button color="dark" fill="outline" mode="ios">
              <ion-icon slot="start" name="logo-github" />
              Read more
            </ion-button>
          </ion-col>
          <ion-col size="12" sizeMd="4" offsetMd="2" pullMd="1">
            <optr-app />
          </ion-col>
        </ion-row>
        <ion-alert-controller />
      </ion-grid>
    ];
  }
}
