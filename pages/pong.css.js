/* Export as a string to import in _app.js and include in global styles. */

export default `
  .pong-alerts {
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: auto;
    left: auto;
    margin: 0;
    padding: 0;
    z-index: 9999;
  }

  .pong-alerts.pong-alerts-bottomRight,
  .pong-alerts.pong-alerts-bottomLeft {
    top: auto;
    bottom: 0px;
  }

  .pong-alerts.pong-alerts-topLeft,
  .pong-alerts.pong-alerts-bottomLeft {
    right: auto;
    left: 0px;
  }

  .pong-alerts-container {
    height: 100%;
    position: relative;
    width: 700px;
    margin: 0;
    padding: 0px;
    transform: translateX(350px);
  }

  .pong-alerts.pong-alerts-topLeft .pong-alerts-container,
  .pong-alerts.pong-alerts-bottomLeft .pong-alerts-container {
    transform: translateX(-350px);
  }

  .pong-alerts-container ul {
    position: absolute;
    list-style: none;
    padding: 20px;
    margin: 0;
    left: auto;
    right: 0px;
    transition: all 0.4s ease-in-out;
  }

  .pong-alerts.pong-alerts-topLeft .pong-alerts-container ul,
  .pong-alerts.pong-alerts-bottomLeft .pong-alerts-container ul {
    right: auto;
    left: 0px;
  }

  .pong-alerts.pong-alerts-bottomRight .pong-alerts-container ul,
  .pong-alerts.pong-alerts-bottomLeft .pong-alerts-container ul {
    top: auto;
    bottom: 0px;
  }

  .pong-alerts-container ul li:not(:last-child) {
    margin-bottom: 20px;
  }

  .pong-alert > * {
    margin: 0;
  }

  .pong-alert {
    transform: translateX(-25px);
    display: flex;
    align-items: center;
    position: relative;
    padding: 20px;
    width: 350px;
    min-width: 350px;
    max-width: 350px;
    border: 1px solid var(--gray-1);
    border-radius: 3px;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.05);
    transition: all 500ms cubic-bezier(0.975, -0.165, 0.08, 1.215);
    transform: translateX(350px);
  }

  .pong-alerts.pong-alerts-topLeft .pong-alert,
  .pong-alerts.pong-alerts-bottomLeft .pong-alert {
    transform: translateX(-350px);
  }

  .pong-alert.visible {
    opacity: 1;
    transform: translateX(-350px);
  }

  .pong-alerts.pong-alerts-topLeft .pong-alert.visible,
  .pong-alerts.pong-alerts-bottomLeft .pong-alert.visible {
    transform: translateX(350px);
  }

  .pong-alert-content {
    width: 100%;
    max-width: 100%;
  }

  .pong-alert-close {
    margin-right: -5px;
  }

  .pong-alert-close svg {
    width: 16px;
    height: 16px;
    position: relative;
    top: -1px;
  }

  .pong-alert h5 {
    font-size: 15px;
    line-height: 22px;
    margin: 0px 0px 10px;
  }

  .pong-alert p {
    font-size: 15px;
    line-height: 22px;
    margin: 0 20px 0px 0px;
  }

  .pong-alert svg path {
    fill: var(--gray-2);
  }

  .pong-alert-info {
    background: var(--primary);
    border: 1px solid var(--primary);
    color: #fff;
  }

  .pong-alert-info svg path {
    fill: #fff;
  }

  .pong-alert-success {
    color: #fff;
    background: var(--success);
    box-shadow: rgba(0, 0, 0, 0.05);
    border: 1px solid var(--success);
  }

  .pong-alert-success svg path {
    fill: #fff;
  }

  .pong-alert-warning {
    background: var(--warning);
    box-shadow: rgba(0, 0, 0, 0.05);
    border: 1px solid var(--warning);
    color: #fff;
  }

  .pong-alert-warning svg path {
    fill: #fff;
  }

  .pong-alert-danger {
    background: var(--danger);
    box-shadow: rgba(0, 0, 0, 0.05);
    border: 1px solid var(--danger);
    color: #fff;
  }

  .pong-alert-danger svg path {
    fill: #fff;
  }
`;
