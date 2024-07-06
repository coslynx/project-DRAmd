import { DiscordAPIService } from '../../services/DiscordAPIService';

class ReportingSystem {
  constructor() {
    this.discordAPIService = new DiscordAPIService();
  }

  reportUser(userId, reason) {
    return this.discordAPIService.sendReport(userId, reason);
  }

  getReports() {
    return this.discordAPIService.fetchReports();
  }

  resolveReport(reportId) {
    return this.discordAPIService.resolveReport(reportId);
  }
}

export default ReportingSystem;