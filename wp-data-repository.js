(() => {
  'use strict';
  const config = window.IM_SURF_DATA;
  const status = document.getElementById('configuration-status');
  if (!config || !Array.isArray(config.workPackages)) {
    status.textContent = 'Repository configuration unavailable. Please contact the coordinator.';
    return;
  }
  let missing = 0;
  function safeUrl(value) {
    if (typeof value !== 'string' || value.includes('REPLACE_WITH_')) return null;
    try {
      const url = new URL(value);
      return url.protocol === 'https:' && !url.username && !url.password &&
        Array.isArray(config.allowedHosts) && config.allowedHosts.includes(url.hostname) &&
        url.hostname.endsWith('.sharepoint.com') ? url.href : null;
    } catch { return null; }
  }
  function accessLink(value, label, primary = false) {
    const href = safeUrl(value);
    const node = document.createElement(href ? 'a' : 'span');
    if (href) {
      node.href = href;
      node.textContent = label;
      if (primary) node.className = 'button';
    } else {
      missing++;
      node.className = 'pending';
      node.textContent = 'SharePoint link pending configuration';
    }
    return node;
  }
  document.getElementById('repository-entry').append(accessLink(config.repositoryUrl, 'Open SharePoint →', true));
  document.getElementById('modulate-entry').append(accessLink(config.modulateUrl, 'Open MODULATE data →', true));
  const tree = document.getElementById('wp-tree');
  const shortTitles = ['Management & dissemination', 'Strong motion databases', '3D wave modelling', 'Soil–structure interaction', 'Structural performance'];
  config.workPackages.forEach((wp, index) => {
    const details = document.createElement('section');
    details.className = 'wp-branch';
    const summary = document.createElement('h3');
    const id = document.createElement('strong'); id.textContent = wp.id;
    const title = document.createElement('span'); title.className = 'wp-title'; title.textContent = shortTitles[index] || wp.title;
    summary.title = wp.title;
    summary.append(id, title);
    details.append(summary);
    if (wp.url) {
      const entry = document.createElement('p');
      entry.className = 'wp-entry';
      entry.append(accessLink(wp.url, `Open ${wp.id} folder ↗`, true));
      details.append(entry);
    }
    tree.append(details);
  });
  status.textContent = '';
})();
