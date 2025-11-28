import { useEffect, useState } from 'react';
import { RefreshCw, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { syncPendingSubscribers, getUnsyncedCount, SyncResult } from '../lib/kit';

export function KitSyncPage() {
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncResult, setSyncResult] = useState<SyncResult | null>(null);
  const [unsyncedCount, setUnsyncedCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = 'Kit Sync Admin | AC Media';
    loadUnsyncedCount();
  }, []);

  const loadUnsyncedCount = async () => {
    setIsLoading(true);
    try {
      const count = await getUnsyncedCount();
      setUnsyncedCount(count);
    } catch (error) {
      console.error('Error loading unsynced count:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSync = async () => {
    setIsSyncing(true);
    setSyncResult(null);

    try {
      const result = await syncPendingSubscribers();
      setSyncResult(result);
      await loadUnsyncedCount();
    } catch (error) {
      console.error('Error syncing:', error);
      setSyncResult({
        success: false,
        syncedCount: 0,
        failedCount: 0,
        errors: [{ email: 'unknown', error: 'Sync process failed' }],
      });
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-roboto-condensed font-bold text-4xl md:text-5xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent mb-6" style={{filter: 'drop-shadow(0 0 20px rgba(232, 93, 111, 0.3))'}}>
            Kit Sync Admin
          </h1>
          <p className="font-roboto-condensed font-semibold text-xl text-primary">
            Manage newsletter subscriber sync to Kit (ConvertKit)
          </p>
        </div>

        <div className="bg-seashell rounded-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Info className="text-brick-red" size={24} />
            <h2 className="font-roboto-condensed font-bold text-2xl text-text-primary">
              Sync Status
            </h2>
          </div>

          {isLoading ? (
            <p className="font-roboto text-neutral">Loading...</p>
          ) : (
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-roboto-condensed font-semibold text-text-primary mb-1">
                      Unsynced Subscribers
                    </p>
                    <p className="font-roboto text-sm text-neutral">
                      Subscribers waiting to be synced to Kit
                    </p>
                  </div>
                  <div className="font-roboto-condensed font-bold text-4xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent">
                    {unsyncedCount}
                  </div>
                </div>
              </div>

              <button
                onClick={handleSync}
                disabled={isSyncing || unsyncedCount === 0}
                className="w-full bg-gradient-to-r from-brick-red to-rose-500 text-white px-8 py-4 rounded-lg font-roboto-condensed font-bold text-lg hover:from-onyx hover:to-black transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                style={{boxShadow: '0 10px 15px -3px rgba(232, 93, 111, 0.3), 0 4px 6px -2px rgba(232, 93, 111, 0.2), 0 0 20px rgba(232, 93, 111, 0.25)'}}
              >
                <RefreshCw size={20} className={isSyncing ? 'animate-spin' : ''} />
                {isSyncing ? 'Syncing...' : 'Sync to Kit Now'}
              </button>

              {unsyncedCount === 0 && !isSyncing && (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={24} />
                  <p className="font-roboto text-green-700">
                    All subscribers are synced to Kit!
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {syncResult && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="font-roboto-condensed font-bold text-2xl text-text-primary mb-6">
              Sync Results
            </h3>

            <div className="space-y-4">
              {syncResult.success && syncResult.syncedCount > 0 && (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={24} />
                  <div>
                    <p className="font-roboto-condensed font-semibold text-green-700">
                      Successfully synced {syncResult.syncedCount} subscriber{syncResult.syncedCount !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              )}

              {syncResult.failedCount > 0 && (
                <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="text-red-500" size={24} />
                    <p className="font-roboto-condensed font-semibold text-red-700">
                      Failed to sync {syncResult.failedCount} subscriber{syncResult.failedCount !== 1 ? 's' : ''}
                    </p>
                  </div>

                  {syncResult.errors.length > 0 && (
                    <div className="space-y-2 mt-4">
                      <p className="font-roboto-condensed font-semibold text-sm text-red-700 mb-2">
                        Errors:
                      </p>
                      {syncResult.errors.slice(0, 10).map((error, index) => (
                        <div key={index} className="bg-white rounded p-3">
                          <p className="font-roboto text-sm text-text-primary">
                            <span className="font-semibold">{error.email}:</span> {error.error}
                          </p>
                        </div>
                      ))}
                      {syncResult.errors.length > 10 && (
                        <p className="font-roboto text-sm text-neutral italic mt-2">
                          ... and {syncResult.errors.length - 10} more errors
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}

              {syncResult.syncedCount === 0 && syncResult.failedCount === 0 && (
                <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4 flex items-center gap-3">
                  <Info className="text-gray-500" size={24} />
                  <p className="font-roboto text-gray-700">
                    No subscribers were processed
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="mt-8 bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
          <h4 className="font-roboto-condensed font-bold text-lg text-blue-900 mb-3">
            How It Works
          </h4>
          <ul className="space-y-2 font-roboto text-sm text-blue-800">
            <li>• When users subscribe to the newsletter, they are saved to Supabase first</li>
            <li>• The system automatically attempts to sync them to Kit immediately</li>
            <li>• If the sync fails (network issues, API limits, etc.), subscribers remain in the queue</li>
            <li>• Use this page to manually sync pending subscribers</li>
            <li>• The system will retry failed syncs up to 5 times</li>
            <li>• Duplicate emails in Kit are handled gracefully</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
